# Speeding up your CI by not doing things

I recently moved a CI system from Concourse (not a well configured Concourse, but I suspect that's prblem - Concourse is complex!) to an off the shelf CI provider.

Running a full test suite went from 20-40 minutes (yes I know) to 2-3 minutes.

In this article I'm using CircleCI and node/typescript for the specifics, but the general approach can be easily applied to software written in any programming language running on any CI.

## Not installing runtime support

Images with already-installed node, typescript, and common packages are provided by the CI provider.

## Not installing packages (unless they've changed)

If your packages aren't changing between commits, why bother reinstalling them?

Before install, run a checksum of `package-lock.json`:

- if that checksum alreadys exist in the cache, used the cached version of `node_modules` instead of installing the packages.
- if that checksum does not already exist in the cache, install the packages, but store `node_modules` in a cache with that checksum

Circle's node orb has a helper to do this.

## Not checking out the code

Obviously many tests need to run in parallel.

`Persistent workspaces`

## Not making a database

Pre-created database

## Not waiting for one job to finish before running the rest
