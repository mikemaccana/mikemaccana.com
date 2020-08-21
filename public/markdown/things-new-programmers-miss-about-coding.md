# It worked

## Using git (like really using git)

Understanding reflog, interactive rebase, resetting the index to an older commit, stashing.

## Avoiding innovating outside your business competancy

## Working with vendors.

You're paying them - don't spend your companies engineering time working around their bugs. Produce small reproducible test cases.

## Working with Open Source

Fix upstream projects - send PRs, get them merged upstream.

Open Source your own stuff when it's useful - you might get free bug fixes.

## Working with StackOverflow

Search for answers first.

Make sure you've attempted to solve the problem yourself.

Have made a generic example (ie you're not expecting the community to write your code for you).

## Give variables specific names

Comments:

```javascript
// Workaround for https://github.com/blah/issue/1
...
```

Cool, thanks to this comment, when that issue is fixed we can delete this code.

## Not being afraid to delete code.

```javascript
// foo .bar()
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
