At the CABForum on June 12th 2019, Google announced that website verification markers will no longer be displayed in future versions of Chrome. 

Verification for websites is performed using EV SSL/TLS certs. These involve checking the company's registration and operating status with the government, calling the phone number published on a specific set of trusted sites (CertSimple certs typically use [Google My Business](https://www.google.com/business/)), verifying the person who ordered the certificate has the authority to do so, and potentially other steps dependent on the type of legal entity.

You'll see the verification markers now at your bank, [GitHub](https://github.com), [Apple](https://apple.com), [Steam](https://store.steampowered.com/) and [any number of high profile sites](http://localhost/why-ev-ssl), particularly where they're concerned about phishing, unofficial sites, affiliates, proving a real world identity is behind a website, or linking to a known brand from an unusual domain. But in a few months time you won't see them in Chrome.

## A short history of verification on the web

EV markers are a more modern version of the original SSL in the 90s, which required companies to fill out a certificate request (CSR) containing the company name and location, then prove their identities to a CA before a certificate is issued. 

<img src="/images/blog/openssl-csr-old.png"/>

*The original SSL process involved verifying all the fields in the certificate request before the certificate was issued*

In 2003, GeoTrust removed identity checks and began issuing certs to anyone with a domain (DV SSL), saving themselves huge amounts of money, but also removing a great deal of trust about who you were connecting to when you visited a secure site. EV, created in 2007, re-added verification, standardised the process and added specific verification markers to browsers.

There have been a number of issues that have been affecting EV certs for a while:

- Verification markers used in browsers don't resemble the more modern verification markers used on all other platforms. People know a blue tick on Twitter, Facebook, Whatsapp is a verified profile, but they don't know a green bar saying 'Apple Inc' means this is Apple. This is fixable, but see the next point.

- Neither CAs nor browsers have done any research into the effectiveness of their current verification interfaces vs alternatives. There's some effort in this direction, but it hasn't been enough.

- In the US specifically, [business name homonym attacks](https://stripe.ian.sh/) have become an issue. Efforts to focus on verifying trademarks (`Stripe (Payments) US`) would have largely resolved this, but haven't been successful.

- Policy for how Chrome - and therefore how the internet - handles identity (or whether should handle identity at all) is the responsibility of a single person at Google. I've had a fairly long conversations with this person about how users could know the real world identity behind a website, and the best they've ever come up with is that the website 'doesn't look right' and 'the domain name isn't well known'. But even Google publish [various](https://www.thinkwithgoogle.com/feature/viewability/) [sites](https://howwemakemoney.withgoogle.com/) at unofficial sounding domain names. It's important to know whether these actually represent Google. [Signed exchanges](https://blog.amp.dev/2019/05/15/signed-exchange-solving-the-amp-urls-display-problem/) could address this issue in future, but have their own set of technical challenges, and only addresses identity issues for companies with well-known domain names. Ultimately, the impression I get is that identity is too complex an issue for browser makers to address anymore.

## What's happening now

<img src="/images/blog/chrome-verification-markers.png">

CertSimple is a tiny player in the certificate space. We've been focusing on developing technology rather than trying to drive the industry. My CA partner DigiCert have been doing an excellent job trying to push identity on the web forward, but the wider CA industry is slow and it's difficult for a CA to act unilaterally. That slowness has made the web a little less trustworthy as a result - and now on [September 10](https://www.chromestatus.com/features/schedule) Chrome 77 will remove verification markers. The feature isn't mentioned in Chrome's [schedule](https://www.chromestatus.com/features/schedule), but you'll see it if you visit any EV site.

<div class="the-point">I hoped that the industry would have improved the effectiveness of verification markers, trust in the verification process and helping browser users understand who they're communicating with. That's not going to happen.
</div>

As a result, we'll be shutting down CertSimple on January 30th 2020.

CertSimple's been a labour of love for quite some time. As a system administrator, I remember finding out CAs had dropped verification back in the mid 2000s. At the beginning of 2015, frustrated with the process of GoDaddy taking months to verify a company, I started hacking on CertSimple. 

I'm proud of what CertSimple has achieved:

- Instantly linking to government registration for every order - so we know the customers exact legal name, business registration number and status before they apply
- Providing a full in-browser webcrypto setup to create keypairs in browsers without us knowing customer's keys
- For customers who prefer to make keys on their servers, providing instantly pastable custom key creation scripts for bash and powershell
- Live previews of verification markers in the current browser before the customer pays
- Providing customised workflows for DBAs and sole proprietor businesses, skipping unnecessary steps and going straight to face to face verification.
- Providing Tor/Onion-specific verification workflows (where EV is particularly relevant as Onion 'domain names' are less meaningful that DNS domain names)
- Integrating dynamic matching for customers to qualified business directories that operate in their countries
- Automatically scanning customer infrastructure to determine the best way to configure HTTPS on their PaaS, CDN, Cloud Provider or server.
- A really fast, hassle-free dashboard focused around customer tasks - adding names, fixing lost private keys, etc - rather than certificate operations.

And non-technically:

- I've met a lot of amazing people. Making into [Entrepreneur First](https://joinef.com) in 2015 (hi EF!), making it to the final round of [Y Combinator](https://www.ycombinator.com/apply/) in 2016 (hi Jared!).
- Leaving employment and a steady paycheck, and worrying about where your rent is coming from. CertSimple hasn't made a huge amount of money - my income has been a little under half of what I'd make elsewhere in the tech industry. The first year was particularly stressful, waking up at 4AM chatting casually to a potential customer in the Dominican Republic, leeching wifi outside a restaurant on a holiday in Mexico to assist on a support call, worrying about money, and having my relationships suffer as a result. It was a learning experience - forcing me to get better at handling stress, and I'm calmer now both in work and outside. 
- Learnt way more about RSA and ECDSA, browser nuances, webcrypto, PKCS, openssl, root stores, [how standards are created](https://shkspr.mobi/blog/2019/06/introducing-the-new-html-element-welcome/), moduli, p, q, chaining than I ever wanted to.
- The infosec, PKI, CDN and browser world, particularly Ryan Hurst, Dierdre Connely, Vincent Lynch, Eric Lawrence, Eric Mill, Patrick Donahue, Troy Hunt, Scott Helme, Chris Palmer, and Ryan Sleevi.
- My amazing CA partner DigiCert, particularly Clint Wilson and Jeremy Hunt. Chris at OpenCorporates.

<div class="the-point">CertSimple will shut down on 30th January 2020</div>

Over the next few days, we'll be contacting customers and sending them a migration plan. EV certificates are still useful in particular cases (Tor is an excellent example - Tor 'domain names' mean even less than regular domain names), and they'll still work in non-Chrome browsers, but it would be wrong to pretend that verification is not hugely diminished at this point.

Meanwhile, you can find me over at my new company [BoomSaaS](https://boomsaas.com), where we're helping developers turn code into full-featured SAAS products instantly.

<div class="the-point">Thank you to all the amazing customers who have used CertSimple. Keep building amazing things.</div>

