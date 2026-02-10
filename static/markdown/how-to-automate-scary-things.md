The alternative title of this was 'how to automate potentially disasterous things'. At some point you may find yourself spending time on some manual task which you'd like to automate.

However as much as you like automation, and hate doing something manually, you like 'not destroying production data' a lot more.

Me too. Massive fan of not destroying production data. Always have been.

# Why automate at all?

Good question. Why not keep doing the potentially destructive thing manually, whenever it comes up?

- Automation allows the rules to be applied systematically, avoiding manual error.
- Monotonous work is boring, making it easier for your attention to go elsewhere, and making mistakes more possible.
- You're smart, and your time is better spent making something your customers want.

# How to automate something that's potentially dangerous

There's actually a really easy pattern here. You'll feel comfortable with each step.

## Be clear.

The word 'destroy' is usually the best. Delete often has undelete. DROP is vague word the database world should have got rid of years ago.

Make the code clear to your colleagues. If the task should only ever run on test databases, for example:

Don't use:

db.connect('test')

Which might be refactored into:

db.connect(process.env.DATABASE_NAME)

By some well-meaning colleague, potentially destroying the production database.

Instead use:

const HARD_CODE_TEST_DATABASE_FOR_SAFETY = 'test'
db.connect(HARD_CODE_TEST_DATABASE_FOR_SAFETY)

## Seperate out the logic that determines whether something should be destroyed into a single function and write unit tests for it

Make a function that takes, as input, all aspect of the resource that determine whether the resource should be destroyed, and returns a boolean result.

Write unit tests for all the possible inputs you can imagine. Run the tests until they pass and you're happy with how comprehensive they are.

If there are functions that are dependent on time or randomness:

- mock Date.now(), Math.random() to return consistent values
- use a more functional style where these variables are provided as functional parameters.

## Create a `list` function that lists the resources that would be destroyed but does not destroy the resources.

Manually inspect the output of the `list` feature when you run it.

Spend a few weeks just listing the resources that should be destroyed and making sure you're comfortable. If it does something wrong, go back to the tests and fix it.

## Automate destroying a single resource

If destroying a single resource manually is time consuming (eg through the AWS UI where many clicks are required to perform some actions), optionally, you can make automate destroying a _single_ resource explicitly (by providing it's name or UUID etc).

You can then:

- list what should be destroyed
- manually inspect each one
- destroy each resource individually after you have inspected it.

The command itself should have the word `destroy` in it. If you're concerned about someone running the command through their history, you can prompt the user to enter the word `destroy` manually.

## Create a feature where, when given a 'destroy' argument, destroys all resources that were previously listed.

The `destroy` command must only operate on the resources returned from the `list` command. Ideally

Run this for a few weeks or months until you feel comfortable scheduling it.

## Schedule it

When you. On a Linux VM or container, a `.timer` file or `cron` job, or a scheduled item on Lambda.

###

That's it. You've now automated the scary thing.
