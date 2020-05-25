var works = [
	{
		slug: `boomsaas`,
		previewImage: `boomsaas.svg`,
		screenshotCount: 8,
		imageExtension: `png`,
		displayTip: "x-large",
		client: `boomsaas`,
		title: `BoomSaaS`,
		pubDate: `Fri, 30 Aug 2013 14:30:14 +0000`,
		lede: `Build a SaaS in minutes not months`,
		description: `
			<p>Software developers spend between 35 and 95% of their time working on things outside the core value of their products - plugging together disparate technologis from different vendors for things like billing, user management, data management, tracking, CRM, in-app-messaging, and all the other parts of running a working SaaS business. What if, instead of plugging all these things into your code, you could plug your code into a ready-to-go, integrated SaaS business? BoomSaaS was part of Entrpreneur First London 2020 cohort, but didn't get funding after I parted with a cofounder. It's still looking for funding, so get in touch!</p>`
	},
	{
		slug: `certsimple`,
		previewImage: `certsimple.png`,
		screenshotCount: 5,
		imageExtension: `png`,
		client: `certsimple`,
		title: `CertSimple`,
		pubDate: `Fri, 30 Aug 2013 14:30:14 +0000`,
		lede: `The fastest, simplest way to verify websites`,
		description: `
			<p>EV verifies a real company runs a website. But due to the verification involved, the average time to get a certificate is 7-10 days. CertSimple uses great UI and live checking of details to issue EV certificates in an average of 5 hours, 40x the speed of the rest of the industry. CertSimple now has over 500 customers and has been featured in TechCrunch, Hacker News and obtained funding from Entrepreneur First's accelerator programme. The tech is full stack node, using yarn workspaces, ES2017 and TypeScript. Exited to ExpeditedSSL in 2020.</p>`
	},
	{
		slug: `mycognition`,
		previewImage: `mycognition.png`,
		screenshotCount: 5,
		imageExtension: `png`,
		client: `mycognition-rise`,
		title: `MyCognition Rise`,
		pubDate: `Fri, 30 Aug 2013 14:30:14 +0000`,
		lede: `Customer onboarding for cognitive learning product`,
		description: `
			<p>A site to promote MyCognition's 'Rise' cognitive development product, and the associated payment and user signup workflow. </p>
			<p>The billing site used CSS3 transitions, ideal postcodes for automatic address retrieval, Stripe for payment, quaderno for invoicing and EU VAT calculation, and node/express.js for the backend.</p>`
	},
	{
		slug: `waves`,
		previewImage: `waves.png`,
		screenshotCount: 5,
		imageExtension: `png`,
		client: `sandpit-lab`,
		title: `Waves`,
		pubDate: `Fri, 30 Aug 2013 14:30:14 +0000`,
		lede: `Live alerts for significant changes in Twitter.`,
		description: `
			<p>Given a keyword, hashtag or user, Waves monitors Twitter for significant changes in sentiment, volume and related words. </p>
			<p>Waves alerts to events before you hear about them. When the Prime Minister of the Ukraine resigned, Waves sent out alerts 40 minutes before BBC and Sky had published a story.</p>`
	},
	{
		slug: `online-wednesday`,
		previewImage: `online-wednesday.png`,
		screenshotCount: 1,
		imageExtension: `png`,
		displayTip: "x-small",
		client: `sandpit-lab`,
		title: `Online Wednesday`,
		pubDate: `Fri, 30 Aug 2013 14:30:14 +0000`,
		lede: `The products people are talking about right now.`,
		description: `
			<p>Online Wednesday is an internal tool used by American Express to discover new products and rank interest in them using Facebook and Twitter.</p>`
	},
	{
		slug: `firework`,
		previewImage: `firework.png`,
		screenshotCount: 3,
		imageExtension: `png`,
		displayTip: "small",
		client: `firework`,
		title: `Firework`,
		pubDate: `Fri, 30 Aug 2013 14:30:14 +0000`,
		lede: `Cloud deployment startup, getting the right code to your customers as fast as possible. `,
		description: `
			<p>Getting the right code to your customers as fast as possible. </p>
			<p>Firework combines data from version control, deployment, logs, and CI into a single place to help developers understand what version of the code belongs in their environments, then uses best-of-breed deployment techniques to turn minutes into milliseconds.</p>`
	},
	{
		slug: `uncompromise`,
		previewImage: `uncompromise.png`,
		screenshotCount: 5,
		imageExtension: `png`,
		displayTip: "medium",
		client: `microsoft`,
		title: `Microsoft Surface 2`,
		pubDate: `Fri, 30 Aug 2013 14:30:14 +0000`,
		lede: `Microsite for the Surface 2 UK launch.`,
		description: `
			<p>Microsite for the Surface 2 UK launch.</p>
			<p>Lots of CSS3, node.js, Twitter & Instagram APIs and Azure.</p>`
	},
	{
		slug: `bazaarvoice-tips`,
		previewImage: `bazaarvoice-tips.png`,
		screenshotCount: 5,
		imageExtension: `png`,
		displayTip: "xx-large",
		client: `bazaarvoice`,
		title: `Tips`,
		pubDate: `Fri, 30 Aug 2013 14:30:14 +0000`,
		lede: `Concieved, and developed a major new application in Bazaarvoice suite.`,
		description: `
			<p>A place for potential and existing customers of Bazaarvoice brands and retailers to trade tips, and receive recognition from their peers and the brand.</p>
			<ul>
				<li>Conceived and developed new from-scratch product.</li>
				<li>Responsive design for mobile, Page Tab, and Canvas/Raw site.</li>
				<li>Uses a combination of jQuery Masonry, jQuery TilesGallery and AngularJS</li>
			</ul>`
	},
	{
		slug: `facebook-ratings-and-reviews`,
		previewImage: `facebook-ratings-and-reviews.png`,
		screenshotCount: 2,
		imageExtension: `png`,
		client: `bazaarvoice`,
		title: `Ratings and Reviews`,
		pubDate: `Fri, 30 Aug 2013 14:34:59 +0000`,
		lede: `A Facebook version of Bazaarvoice's hugely popular and award-winning Ratings and Reviews app, used on major retailers and brands worldwide.`,
		description: `
			<p>A Facebook version of Bazaarvoice's award-winning Ratings and Reviews app.</p>
			<ul>
				<li>Responsive design across Mobile, Facebook Page Tab,and Facebook Canvas</li>
				<li>Async using Tornado and JS</li>
			</ul>`
	},
	{
		slug: `facebook-stories`,
		previewImage: `facebook-stories.png`,
		screenshotCount: 2,
		imageExtension: `png`,
		displayTip: "medium",
		client: `bazaarvoice`,
		title: `Stories`,
		pubDate: `Mon, 12 Aug 2013 08:45:37 +0000`,
		lede: `A photo-centric Facebook app.`,
		description: `
			<p>A photo-centric Facebook app. Current live sites include Behr Paint and Thomas Cook travel.</p>
			<ul>
				<li>Responsive design for mobile, Page Tab, and Canvas/Raw site.</li>
				<li>Uses acombinationof jQuery Masonry, jQuery TilesGallery and Mike's PhotoCollage (my own custom-written jQuery Plugin) for tiled layouts.</li>
			</ul>`
	},
	{
		slug: `social-deployer`,
		previewImage: `social-deployer.png`,
		screenshotCount: 1,
		imageExtension: `png`,

		displayTip: "small",
		client: `bazaarvoice`,
		title: `Social Deployer`,
		pubDate: `Mon, 12 Aug 2013 08:51:10 +0000`,
		lede: `Deploy new software from Github to Amazon EC2 from a single drop down.`,
		description: `
			<p>Deploy new software from Github to Amazon EC2 from a single drop down.</p>
			<ul>
				<li>Automatically deploys, tests and images commits as soon as they're made</li>
				<li>Builds autoscaled, load-balanced EC2 environments without any end user input</li>
				<li>Live updated on progress and other relevant events</li>
				<li>Async using NodeJS & client side JS. Uses Github, Amazon EC2 libraries, Agave.JS, HTML5 server-sent events.</li>
			</ul>`
	},
	{
		slug: `bazaarvoice-questions-and-answers`,
		previewImage: `bazaarvoice-questions-and-answers.png`,
		screenshotCount: 1,
		imageExtension: `png`,
		displayTip: "small",
		client: `bazaarvoice`,
		title: `Questions and Answers`,
		pubDate: `Fri, 30 Aug 2013 14:17:04 +0000`,
		lede: `Connecting customers with company staff and the wider product community to answer product questions.`,
		description: `
			<p>Connecting customers with company staff and the wider product community to answer product questions.</p>
			<p>Facebook platform, leaderboards, responsive design.</p>`
	},
	{
		slug: `pamplemousse-js`,
		previewImage: `pamplemousse-js.png`,
		screenshotCount: 1,
		imageExtension: `png`,
		displayTip: "x-small",
		client: `opensource`,
		title: `Pamplemousse JS`,
		pubDate: `Fri, 30 Aug 2013 13:57:49 +0000`,
		lede: `An OpenSource project for simple realtime communication`,
		description: `
			<p>Pamplemousse is a simple set of two modules to handle HTML5 server sent events. It's supplied as a RequireJS module, and takes care of:</p>
			<ul>
				<li>Encoding things in SSE format</li>
				<li>Mime types</li>
				<li>Updating message IDs</li>
				<li>Timeouts</li>
				<li>JSON in, JSON out</li>
				<li><a href="http://pamplemoussejs.org">http://pamplemoussejs.org</a></li>
			</ul>`
	},
	{
		slug: `ginjs`,
		previewImage: `ginjs.png`,
		screenshotCount: 2,
		imageExtension: `png`,
		client: `js`,
		title: `gin.js`,
		pubDate: `Thu, 03 Oct 2013 16:04:11 +0000`,
		lede: `A regular meetup for London based JavaScript developers. I founded the event and organize the venue, mailing list, ticketing and sponsors.`,
		description: `
			<p>A regular meetup for London based JavaScript developers. I founded the event, designed the lovely (responsive) site, and organize the venue, mailing list, ticketing and sponsors.</p>`
	},
	{
		slug: `google-android-4-launch`,
		previewImage: `google-android-4-launch.png`,
		screenshotCount: 3,
		imageExtension: `png`,
		displayTip: "small",
		client: `google`,
		title: `Android 4 Launch`,
		pubDate: `Tue, 13 Aug 2013 10:39:45 +0000`,
		lede: `Launch of Android 4 (Ice Cream Sandwich) and the Samsung Galaxy Nexus phone.`,
		description: `
			<p>Launch of Android 4 (Ice Cream Sandwich) and the Samsung Galaxy Nexus phone.</p>
			<ul>
				<li>Worldwide phone retailer education for Android 4 and Galaxy nexus</li>
				<li>Quiz and results reporting</li>
				<li>Entire site internationalized to every Google market</li>
			</ul>`
	},
	{
		slug: `agave-js`,
		previewImage: `agave-js.png`,
		screenshotCount: 1,
		imageExtension: `png`,
		displayTip: "x-small",
		client: `opensource`,
		title: `Agave JS`,
		pubDate: `Fri, 30 Aug 2013 14:00:16 +0000`,
		lede: `Safe native methods for modern JavaScript environments.`,
		description: `
			<p>Safe native methods for ES8.</p>
			<ul>
				<li>One of the first JS libraries to safely extend native methods.</li>
				<li>Method names are namespaced to avoid conflicts</li>
				<li>All methods are non-enumerable using ES5 defineProperty()</li>
				<li><a href="http://agavejs.org">http://agavejs.org</a></li>
			</ul>`
	},
	{
		slug: `youtube-world-view`,
		previewImage: `youtube-world-view.png`,
		screenshotCount: 4,
		imageExtension: `png`,
		client: `google`,
		title: `YouTube World View`,
		displayTip: "medium",
		pubDate: `Mon, 23 Sep 2013 14:03:55 +0000`,
		lede: `An app to allow citizens all over the world to address questions directly to world leaders.`,
		description: `
			<p>An app to collect questions from citizens all over the world, and addressed those questions to world leaders - including Barack Obama, Bono, David Cameron, Angela Merkel and Nicholas Sarkozy.</p>
			<ul>
				<li>Client: Google</li><li>YouTube API, Google Moderator API, Google Accounts OAuth</li>
				<li>Live YouTube interviews watched by millions of people</li>
				<li>First use of the YouTube Live API</li>
				<li><a href='http://youtube.com/worldview'>http://youtube.com/worldview</a></li>
				<li><a href='https://code.google.com/p/social-interviews/'>Source code</a></li>
			</ul>`
	},
	{
		slug: `google-getting-american-business-online`,
		previewImage: `google-getting-american-business-online.png`,
		screenshotCount: 3,
		imageExtension: `png`,
		displayTip: "medium",
		client: `google`,
		title: `Getting American Business Online`,
		lede: `Google's worldwide programme to get businesses online`,
		description: `
			<p>Google's worldwide programme to get businesses online, aiming to substantially reduce the count of all businesses that don't have an internet presence.</p>
			<ul>
				<li>Custom layout engine to allow local Google teams to customize the site to their own market (a US state or a country).</li>
				<li><a href="http://www.gybo.com/">http://www.gybo.com/</a></li>
			</ul>`
	},
	{
		slug: `google-10th-birthday-germany`,
		previewImage: `google-10th-birthday-germany.png`,
		screenshotCount: 2,
		imageExtension: `png`,
		displayTip: "x-small",
		client: `google`,
		title: `10th Birthday Germany`,
		lede: `A rich, interactive site created to showcase Google's work over the last decade in Germany. `,
		description: `
			<p>A rich, interactive site created to showcase Google's work over the last decade in Germany. </p>
			<ul>
				<li>Client: Google</li><li>Built in a weekend, advertised nationally on on German TV</li>
				<li>Custom HTML5 canvas and scenegraph work</li>
				<li><a href="http://www.10jahregoogle.de/">http://www.10jahregoogle.de/</a></li>
			</ul>`
	},
	{
		slug: `im-everyone`,
		previewImage: `im-everyone.png`,
		screenshotCount: 3,
		imageExtension: `png`,
		displayTip: "large",
		client: `imeveryone`,
		title: `I'm Everyone`,
		lede: `A realtime, threaded, anonymous communication platform.`,
		description: `
			<p>A realtime, threaded, anonymous communication platform.</p>
			<ul>
				<li>Completely realtime: both new posts and new comments are constantly pushed to browsers.</li><li>No logins: each unique participant in a conversation is given an an animal avatar to identify themselves. Outside of that single thread that</li>
				<li>Front page of Hacker News, Reddit, tweeted by @smashingmagazine.</li>
				<li>Site is closed down - moderation is required to provide a safe environment.</li>
			</ul>`
	},
	{
		slug: `python-docx`,
		previewImage: `python-docx.png`,
		screenshotCount: 1,
		imageExtension: `png`,
		displayTip: "x-small",
		client: `opensource`,
		title: `Python Docx`,
		pubDate: `Fri, 30 Aug 2013 14:05:05 +0000`,
		lede: `The native Python module to create, edit and save Microsoft Word documents.`,
		description: `
			<p>The native Python module to create, edit and save Microsoft Word documents.</p>
			<ul>
				<li>Thousand of users, and nearly 1000 stars on Github</li>
				<li>LXML, OpenXML</li>
				<li><a href="https://github.com/mikemaccana/python-docx" target="_blank">https://github.com/mikemaccana/python-docx</a></li>
			</ul>`
	},
	{
		slug: `linux-and-python`,
		previewImage: `redhat.png`,
		screenshotCount: 1,
		imageExtension: `png`,
		displayTip: "x-small",
		client: `redhat`,
		title: `A decade of Linux`,
		pubDate: `Fri, 30 Aug 2013 14:05:05 +0000`,
		lede: `Large scale infrastructure and automation engineer.`,
		description: `
			<p>I spent a decade as an infrastructure and automation engineer, working as a Linux and python trainer and consultant at Red Hat (yes, that's me in the default /etc/sudoers file), IBM Global Services' dedicated Linux team, and a variety of financial organizations on large ($450M AUD) projects.</p>`
	},
	{
		slug: `feature-writer-apc-magazine`,
		previewImage: `feature-writer-apc-magazine.jpeg`,
		screenshotCount: 4,
		imageExtension: `jpeg`,
		displayTip: "large",
		client: `apc`,
		title: `Tech Journalism`,
		lede: `Writing for various Asia Pacific print magazines on Linux, servers, mobile, blogging, gaming, audiovisual, and other topics of interest to readers.`,
		description: `
			<h2>Feature writer, APC Magazine</h2>
			<p>Regular pieces for the largest computer magazine in Asia Pacific, circulation 75,000.</p>

			<h2>Columnist, PC Authority Magazine</h2>
			<p>Monthly column in Australian/New Zealand computer magazine, circulation 55,000, on Linux, servers, 3G, content management, and other topics of interest to readers.</p>

			<h2>Linux PocketBook 3rd Edition</h2>
			<p>Wrote over 40,000 words for this accessible and fun guide to Linux. Sold at a premium price (twenty Australian dollars), over 20,000 copies were sold.</p>
			
			<h2>Founding Editor, Australian Linux Journal</h2>
			<p>Sourced writers, provided briefs, copy-edited, and interviewed for the first two issues of this Asia/Pacific magazine focusing on Linux and Open Source.</p>
			
			<h2>Newspaper and radio</h2>
			<p>Writing and speaking roles for newspapers (Sydney Morning Herald), and radio (3RRR Melbourne).</p>`
	},
	{
		slug: `doom-the-path`,
		previewImage: `doom-the-path.png`,
		screenshotCount: 4,
		imageExtension: `png`,
		displayTip: "medium",
		client: `doom`,
		title: `Doom: The Path`,
		lede: `Released in 1996, one of the most critically acclaimed (and largest) Doom II levels of all time.`,
		description: `
			<p>Released in 1996, one of the most critically acclaimed (and largest) Doom II PWADs (levels) of all time. </p>
			<ul>
				<li>Deep water, filling water tanks, working urinals, floating platforms, and other advanced techniques.</li>
				<li>Custom textures and sounds.</li>
				<li>Built when I was 15, with a computer that couldn't edit the entire level at once. I built individual chunks, my friend John Graham assembled these together into a full level on his more powerful computer.</li>
				<li><a href="http://www.doomworld.com/idgames/?id=7427">Download from DoomWorld</a></li>
			</ul>`
	}
];

export default works;
