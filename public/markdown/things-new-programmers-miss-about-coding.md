You're probably a better coder than I am. You might have a CS degree or work for a FAANGUL company that likes coding puzzles. This article isn't about coding. 

## Using git (like really using git)

Really using git isn't about using the command line. It's understanding what the staging area is, it's about what rebasing actually is (what's a base? What's being changed by rebasing?). It's about a commit history that makes sense, including individual working commits, with different features in different commits and unrelated features in different branches.

### Making a beautiful commit history

Say you add a new feature. The commit history may look like:

 - Fix something unrelated you spot, which you sort out because you're a good coder
 - Implement the feature
 - There's a small typo that needs resolving
 - Then you realise a test needs updating
 - Also another old bug
 - A colleague had a suggestion in the PR

This is three bits of work, that should be three commits:

- Fix something unrelated you spot, which you sort out because you're a good coder
- Also another old bug
- Add a new feature. This commit would contain the same content as:
  - Implement the feature
  - There's a small typo that needs resolving
  - Then you realise a test needs updating
  - A colleague had a suggestion in the PR

Those three commits could be in the same tree, or different trees, depending on your in-house style. But either way, they should be 3 commits. 

 - The commit history is more readable
 - 


You have a few ways to do this - you can interactive rebase, changing all commits since a particular commit (the 'base') and squashing, fixing up, or deleting that work.

Understanding reflog, interactive rebase, resetting the index to an older commit, stashing.

You could start two new branches for the new work, based on master, and cherry pick the fix for each. Or you can skip this and do it later.


### Not feeling scared of git

`git reflog`

### Handling accidental historical commits

Reset credentials. 

### Handling secrets

Use a `.env` file. Don't commit it. Stick it in a password app, or on your CI, or wherever else. 





## Not being afraid to automate scary things

## Avoiding innovating outside your business competancy. 

## This means don't run Kubernetes unless you're a cloud provider.

If you're running a 

in-house Concourse setup. Bizarre interface, 20 minutes and 

It takes 4 mins 50 secs, 

## Avoid adding languages 

## Working with vendors.

You're paying them - don't spend your companies engineering time working around their bugs. Produce small reproducible test cases.

## Working with Open Source

How to get people to pay attention to your bugs: actually contribute something. 

Fix upstream projects - send PRs, get them merged upstream.

Open Source your own stuff when it's useful - you might get free bug fixes.

## Working with StackOverflow

Search for answers first.

Make sure you've attempted to solve the problem yourself.

Have made a generic example (ie you're not expecting the community to write your code for you).

## Give variables specific names

## Link to external issues in your comments

Yes, sometimes you need to implement hacks. 

```javascript
// blah is broken, so we need to do this hack to work around it
...
```

But you know what's bad? When the hacks aren't needed anymore but the workarounds still exist.

```javascript
// Workaround for https://github.com/blah/issue/1
...
```

Cool, thanks to this comment, when that issue is fixed we can delete this code.

## Not being afraid to delete code.

```javascript
// foo.bar()
```

It's not doing anything. Delete it. If you want it back, it's in git.

## Naming things

```javascript// Actually a banana
let apple = ....
```

<q>What's data? It's data for shipments. But don't call it shipmentsData. Remove 'data' because it's meaningless. It's 'shipments'</q>

Comments are great for why, or if something's tricky. But good names are important too.

```javascript
let banana = ...
```
