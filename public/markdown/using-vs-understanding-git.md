# Understanding git

You're probably a better coder than I am. You might have a CS degree or work for some amazing tech company that likes coding puzzles. This article isn't about coding.

## Using git (like really using git)

<div class="the-point">
Really using git isn't about being very good at the command line. Using `git rebase -i` and git's somewht odd editor-based user interface to reorder your commits isn't more clever than using Fork / SourceTree / Tower to do the same thing. 
</div>

It's understanding concepts - what the staging area is, it's about what rebasing actually is (what's a base? What's being changed by rebasing?). It's about a commit history that makes sense, including individual working commits, with different features in different commits and unrelated features in different branches.

### Making a granular, understandable commit history

Say you add a new feature. The commit history may look like:

- Fix something unrelated you spot, which you sort out because you're a good coder
- Implement the feature
- There's a small typo that needs resolving
- Then you realise a test needs updating
- Also fix another old bug
- A colleague had a suggestion in the PR

This is six items of work, that should be three commits:

- Fix something unrelated you spot, which you sort out because you're a good coder
- Also fix another old bug
- Add a new feature. This commit would contain the same content as:
  - Implement the feature
  - There's a small typo that needs resolving
  - Then you realise a test needs updating
  - A colleague had a suggestion in the PR

Those three commits could be in the same tree, or different trees, depending on your in-house style. But either way, they should be 3 commits.

- The commit history is more readable
- It's possible to revert a given commit (say that second bug fix causes a new problem) and have a working tree.

You have a few ways to do this - you can interactive rebase, changing all commits since a particular commit (the 'base') and squashing, fixing up, or deleting that work. But if different commits did work on the same file - the first commit usmodifieded file A and B, the second commit modified B and C - you may find it easier to simply reset the index to the beginning, and group the changes into new commits that contain related code.

### Knowing you probably haven't lost work, even if it seems like you have lost work

Merging and rebasing can be scary. Git can seem opaque at times. But you should never feel like you've lost work, and start rewriting code you've made before.

Recent modification - including rebases can be retrieved via `git reflog`. Accidentally deleted stashes can be retrieved via `git fsck`. They're cleaned up regularly but unless it's been a while between when you threw away the work and when you noticed the work was missing, it's probably still there waiting under a hash you can find with the above two commands.

### Deciding to stash or branch

I still stash, but

`stashes` can't be shared. [Renaming stashes is a pain]().

### Knowing when it's OK, and when it's not OK, to force push

Force oushing is changng the history on a branch. It's considered 'bad' by some people, with reason: your colleagues will attempt to append to a history that no lonmger exists

### Keeping branches short lived

Wher something went wrong.

You could start two new branches for the new work, based on master, and cherry pick the fix for each. Or you can skip this and do it later.

### Not feeling scared of git

### Handling accidental historical commits

Reset credentials.

### How to handle secrets outside of git

Use a `.env` file. Don't commit it. Stick it in a password app, or on your CI, or wherever else.
