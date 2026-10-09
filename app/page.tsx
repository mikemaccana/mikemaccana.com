export default function HomePage() {
  return (
    <main>
      <div className="hero">
        <img
          className="portrait"
          src="/images/mike.jpg"
          alt="Mike MacCana"
          width={1200}
          height={1200}
          decoding="async"
        />
        <div>
          <h1>Mike MacCana</h1>
          <p className="lede">I teach finance concepts, and I am available as a speaker.</p>
          <p className="place">New York</p>
        </div>
      </div>

      <section className="section">
        <p className="kicker">About</p>
        <h2>I speak and write about finance and technology.</h2>
        <p>
          I teach how financial products work. I am the author of{" "}
          <a href="/book">Building Financial Software on Solana</a>, and create video and written content on
          blockchain and finance topics for Quicknode. Before that, at the Solana Foundation, I created a four-day
          program that has been taught at Ivy League universities, and I maintained the developer training that was
          the highest-retention content on the Foundation&apos;s site. I co-created and presented the Developer
          Bootcamp, watched over 330,000 times.
        </p>
        <p>
          I am available as a speaker. I have spoken about technology at conferences for more than 25 years. I
          have spoken at Solana Breakpoint, Solana Accelerate, and the Digicert Cryptography Forum.
        </p>
        <p>
          <a className="cta" href="/speaking">
            Book me to speak
          </a>
        </p>
        <p>
          Before blockchain I worked across cryptography, finance and technology, including Man Group, Credit Suisse,
          CMC Invest, Google, and Red Hat. I founded CertSimple, used by Buzzfeed, Monzo, and most London fintechs.
          <br />
          CertSimple exited, selling its core technology to DigiCert, and sold the name and brand to Expedited
          Security in January 2020. I created python-docx, which Microsoft uses in its own AI tools. I was the first
          product engineer at Humanloop.
          <br />
          Humanloop exited to Anthropic in 2025. I am a member of Superteam India.
        </p>
      </section>
    </main>
  );
}
