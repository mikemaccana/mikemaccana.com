# The failsafe scheduler pattern

## Performing remote admin in 2001

I'm a Linux administrator configuring company firewalls. The firewalls are located far away, so I'm configuring them remotely.

If I misconfigure the firewall I will lock myself out, and no longer be to undo the changes I just made.

The will then have to drive to the location to fix these mistakes. This device may be more expensive than the money made from configuring the firewall.

## Building a SaaS in 2015

Building my first SaaS. Someone starts ordering, giving me the details for their order.

If the lead leaves the site without compelting the order process, the company will lose them as a potential customer. And not just any potential customer - one that thought enough of the product to nearly go through the entire ordering process, but decided not to at the last minute. There's a high probability we could have converted this lead into a revenue. But they're gone now and it's too late - the sale has failed.

## What these have in common

What these two problems have in common is their solution: the failsafe pattern. There are many more examples - Wikileaks protects whistleblowers using ['insurance files'](https://twitter.com/wikileaks/status/743824112376766465) with decryption keys that will be released, presumably, if a certain amount of harm comes to the whistleblowers.

<q>A system being "fail-safe" means that the system's design prevents or mitigates unsafe consequences of the system's failure. That is, if and when a "fail-safe" system fails, it remains at least as safe as it was before the failure.</q>

Sources: http://www.audioenglish.net/dictionary/fail-safe.htm and https://web.archive.org/web/20111008021648/http://www.billpetit.com/Papers/Petit017.pdf via Wikipedia.

Practically, the best way to ensure the system is safe as it was before the failure is to:

- Capture the state (the firewall working, the customer ordering)
- Set a timer to restore that state - via a scheduling mechanism like:
  - A '.timer' file or 'at' job in Linux
  - `setTimeout()` and `cancelTimeout()` in node
- Cancel the restoration once we can guarantee the operation was successful

## Solving the firewall

An `at` job

## I'm not the first person to do this

If you've ever been shopping online and put something in your cart, but not checked out, you'll get banner ads across websites you subsequently visit (assuming those websites have Google, Facebook etc ad network trackers) advertising the same product to you. That's another example of the failsafe scheduler pattern - as long as you don't purchase, the online store will attempt to put you back into the sales process.

However I haven't been able to find an actual _name_ for the pattern. So in case an existing name doesn't turn up, I'm calling it the **failsafe scheduler** pattern.

Have you used the failsafe scheduler pattern?
