import Link from "next/link";

export default function Home() {
  return (
    <main className="cli-output">
      <p className="cli-command"><span className="terminal-prompt">max@mseung:~$</span> whoami</p>
      <h1>max seung</h1>
      <p className="cli-muted">developer · builder · occasional tinkerer</p>

      <p className="cli-command"><span className="terminal-prompt">max@mseung:~$</span> ls ./links</p>
      <nav className="cli-links" aria-label="Social links">
        <Link href="https://github.com/maxas10">github</Link>
        <Link href="https://www.linkedin.com/in/maxseung/">linkedin</Link>
        <Link href="https://bsky.app/profile/mseung.bsky.social">bluesky</Link>
        <Link href="/support/">email</Link>
      </nav>

      <p className="cli-command"><span className="terminal-prompt">max@mseung:~$</span> ls ./projects</p>
      <section className="cli-projects" aria-label="Projects">
        <article>
          <Link href="/turing">turing-machine-compiler/</Link>
          <p>I made this for my AP Computer Science class because they didn&apos;t have one. Features easy-to-read steps.</p>
        </article>
        <article>
          <Link href="https://calstateunderground.vercel.app">caliground/</Link>
          <p>Rock band portfolio with a cloud-hosted database and RESTful API integration for organizing user inquiries.</p>
        </article>
        <article>
          <Link href="/failures">museum-of-failures/</Link>
          <p>A collection of my failures.</p>
        </article>
      </section>

      <p className="cli-command cli-cursor"><span className="terminal-prompt">max@mseung:~$</span><span className="cursor" aria-hidden="true" /></p>
    </main>
  );
}
