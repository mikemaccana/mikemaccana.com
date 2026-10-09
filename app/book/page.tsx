import type { Metadata } from "next";

const bookUrl = "https://solanabook.org";
const amazonUrl = "https://www.amazon.com/s?k=9798997472207";

export const metadata: Metadata = {
  title: "Book · Mike MacCana",
  description:
    "The definitive guide to creating financial products on the world's most active blockchain.",
};

export default function BookPage() {
  return (
    <main>
      <section className="section">
        <p className="kicker">01 Book</p>
        <h2>
          <a href={bookUrl}>Building Financial Software on Solana</a>
        </h2>
        <img
          className="cover"
          src="/images/book-cover.png"
          alt="Cover of Building Financial Software on Solana, by Mike MacCana"
          width={744}
          height={969}
        />
        <p>
          I am the author of <a href={bookUrl}>Building Financial Software on Solana</a>.
        </p>
        <blockquote>
          <p>
            &ldquo;If this book had existed sooner, I would have been very early to Solana. It&apos;s still very early.
            First inning. All financial and AI players need to pick this book up and start building.&rdquo;
          </p>
          <cite>Iqram Magdon-Ismail, cofounder of Venmo</cite>
        </blockquote>
        <p>
          <a href={bookUrl}>solanabook.org</a>
        </p>
        <p>
          <a className="cta" href={amazonUrl}>
            Buy on Amazon
          </a>
        </p>
      </section>
    </main>
  );
}
