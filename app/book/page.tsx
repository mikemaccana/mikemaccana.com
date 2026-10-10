import type { Metadata } from "next";

const bookUrl = "https://solanabook.org";
const amazonUrl = "https://www.amazon.com/dp/B0HMJSSB95";

export const metadata: Metadata = {
  title: "Book · Mike MacCana",
  description:
    "The definitive guide to creating financial products on the world's most active blockchain.",
};

export default function BookPage() {
  return (
    <main>
      <p className="kicker page-kicker">Book</p>
      <h1 className="page-title">The Solana finance book</h1>
      <div className="book">
        <img
          className="cover"
          src="/images/book-cover.png"
          alt="Cover of Building Financial Software on Solana, by Mike MacCana"
          width={744}
          height={969}
        />
        <div>
          <p>
            I am the author of <a href={bookUrl}>Building Financial Software on Solana</a>, also known as the Solana
            Finance Book or just The Solana Book.
          </p>
          <p>
            It includes ten complete programs, among them fundraisers, prediction markets, exchanges, AMMs, lending
            platforms, managed funds, options, and perpetual futures.
          </p>
          <blockquote>
            <p>
              &ldquo;If this book had existed sooner, I would have been very early to Solana. It&apos;s still very early.
              First inning. All financial and AI players need to pick this book up and start building.&rdquo;
            </p>
            <cite>Iqram Magdon-Ismail, cofounder of Venmo</cite>
          </blockquote>
          <p>
            <a className="cta" href={amazonUrl}>
              Buy on Amazon
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
