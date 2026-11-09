import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards · Mike MacCana",
  description: "Arctic Code Vault, Solana Sandstorm, and python-docx.",
};

export default function AwardsPage() {
  return (
    <main>
      <section className="section">
        <p className="kicker">Awards</p>
        <h1 className="page-title">Recognition</h1>
        <ul className="rows awards">
          <li>
            <span className="when">Arctic Code Vault</span>
            <span>GitHub Arctic Code Vault contributor, for Node.js work.</span>
          </li>
          <li>
            <span className="when">Solana Sandstorm</span>
            <span>
              Two prizes for Portal Payments. Wallet recovery with cryptographically secure yet memorable phrases,
              and an identity token shown when entering a recipient address.
            </span>
          </li>
          <li>
            <span className="when">python-docx</span>
            <span>
              I created python-docx in 2009. The Python library for Word documents is now used by millions of people.
              Microsoft uses it to read Word files in its own AI tools.
            </span>
          </li>
          <li>
            <span className="when">Stack Overflow</span>
            <span>Top 0.1% of developers worldwide. Currently ranked #190 of around 3 million users.</span>
          </li>
          <li>
            <span className="when">Solana</span>
            <span>Top 10 on Solana Stack Exchange.</span>
          </li>
          <li>
            <span className="when">Google</span>
            <span>Google Creative Lab work shown on the google.com homepage.</span>
          </li>
          <li>
            <span className="when">AWS</span>
            <span>Serverless work shown on stage at AWS re:Invent.</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
