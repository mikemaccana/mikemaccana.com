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
          <p className="lede">Blockchain finance educator</p>
          <p className="place">New York</p>
        </div>
      </div>

      <section className="section">
        <p className="kicker">About</p>
        <h2>I speak and write about finance and technology.</h2>
        <p>
          I teach how financial products work on blockchains. I am the author of{" "}
          <a href="/solana-book">Building Financial Software on Solana</a>, speak regularly on
          blockchain and finance topics for Quicknode, and maintain <a href="/open-source">the most comprehensive library of financial programs</a> on <a href="https://classic.artemis.ai/asset/solana">the most active blockchain</a>.</p>
          <p>Before that, I created the four-day
          at Solana Foundation training program, which has been taught all over the world from blockhain clubs in Romania to Ivy League universities in the US, and I maintained the blockchain training that was
          the highest-retention content on solana.com. I also co-created and presented the Solana Developer
          Bootcamp, watched over 330,000 times.
        </p>
        <p>
          I am available as a speaker, and have spoken about technology at conferences for more than 25 years including Solana Breakpoint, Solana Accelerate, and the Digicert Cryptography Forum.
        </p>
        <p>
          <a className="cta" href="/speaking">
            Book me to speak
          </a>
        </p>
        <p>
          Before blockchain I worked across cryptography, finance and technology, including Man Group, Credit Suisse,
          CMC Invest, Google, and Red Hat. I founded and sold CertSimple, a company that took the process to match a legal entity against a public key from a month to a few minutes.
        </p>
      </section>
    </main>
  );
}
