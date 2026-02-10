TLDR: links can be really useful.

## Link to external bugs you're working around

Yes, sometimes you need to implement hacks. We all have that one vendor who loves sending Booleans and Numbers as Strings. We all have to deal with out of date browsers being broken. Or whatever else.

```javascript
// Frobnitz is broken, so we need to do this hack to work around it
...
```

OK. But now it's 12 months later. How do we know if Frobnits is still broken or fixed?

- If we update Frobnitz and it's fixed, but we keep the code because we don't know that the issue is fixed, the hack could potentially break something.
- If it's fixed, we can remove the hack, acheiveing the same work with less code and therefore greater simplicity!

So instead:

```javascript
// Workaround for https://github.com/blah/issue/1
...
```

Thanks to this comment, when that issue is fixed we can delete this code. Don't be afraid of deleting code by the way, it's still there in git.

## Making sure a TODO actually gets done

```javascript
// TODO: send email to user for confirmation of removal
```

Do you regularly search for TODOs in your code base and fix them?

If you answer affirmatively, I'm going to be skeptical. Nothing personal.

Work to be done should be tracked in your work tracker - trello or GitHub issues or whatever else. Make a ticket.

```javascript
// TODO: send email to user for confirmation of removal: https://trello.com/c/j59oUI1t
```

## As a reference to a trusted source

So nearly every JS module is in milliseconds, because that's the granularity of time. But not always. Not for this one:

```javascript
// In seconds
```

We could trust this. We'll assume someone tested it, or read it somewhere, and that the source for the information was accurate. That's a few assumptions though.

Let's make it a matter of fact, rather than a matter of opinion:

```javascript
// In seconds, see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age
```

## As a link to related web apps

We use a Continuous Integration (CI) provider to run our tests. Someone who is looking at the config file for our app may be:

- Investigating a problem
- Wondering how our app does CI
- Adding environment variables

In each of these cases, there's a web app or website that's relevant

```yaml
# To see pipeline:
# https://app.ciprovider.com/pipelines/github/company/app

# To see running jobs:
# https://app.ciprovider.com/pipelines/gh/company/app/jobs

# Secrets are set at:
# https://app.ciprovider.com/settings/project/github/company/app/environment-variables
```

## Where you got the code from

Yes, you should use libraries where possible. But sometimes there's a cool hack or technique from Stack Overflow that's the perfect fit. You should probably refactor it a little to fit your in-house conventions, and you should definitely understand what the code does, but sure, use the code.

```
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
```

Is this correct? If the staff member that committed the code didn't write the code, who did? If we don't have tests for the code, should we just trust that it works?

```
// From https://stackoverflow.com/a/12646864/4752388
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
```

It's quite possible that this question may have a better answer in future - editing, spitting bugs and edge cases, or references to maintained modules that provide this function. Keeping a link between the code and it's original location allows our app to be kept up to date with those changes.

## Handling obscure syntax

I was recently working on some CI tests that ran the same job, providing a different parameter each time. This worked, but involved a lot of very similar paragraphs, copy and pasted.

Copy and pasted code is bad. It means that when the code changes, we'll have to modify it in every one of the duplicates.

What I wanted to was to do something like a `forEach` loop, iterating over the parameters, and running the job with each one. I asked the vendor if they provided something like this and was told no, they don't. Which makes sense as their CI language is config, not code.

The thing is: they do provide a way to loop over items. You won't find it when you look for 'forEach' or 'array'. It's called a 'matrix job' (named because it will iterate over each combination of a multidimensional array, also called a matrix).

I don't want to maintain the same code forever, so I'll let me colleagues know:

```javascript
// Circle matrix jobs
```

DFS query then fetch

## Links to docs

- Vendors sometimes hide their documentation. Good ones have a link to 'docs', bad ones have a 'Developer Center' and want you to pick one of a limited set of use cases (which aren't relevant to what you're actually doing) before you can find out where the docs are.
- Vendors often have multiple APIs, and it's not clear which one is relevant for which use case (which the vendor should also fix).
- Open Source projects often have good docs, but search engines are bad at picking them up. Look at TypeORM - the [Google results]() misses [the official docs](https://typeorm.io) completely.
- Sometimes the part that's relevant to you is a little more specific - eg, if you use Pino that's great, but if you use Pino on Fastify, the real info is at https://getpino.io/#/docs/web?id=pino-with-fastify

TypeORM is fasntastic, but for some

Bad SEO

Particularly if the vendor hides their documentation.

##
