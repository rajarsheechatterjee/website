export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey, I'm Rajarshee Chatterjee
      </h1>
      <p className="mb-4">
        {`I'm a Senior Software Engineer at Harness, working on the frontend for Cloud Cost Management. I work fullstack at times and build tools that simplify complex problems or things I'm interested in.`}
      </p>
      <p className="mb-4">
        {`A few years ago, I started `}
        <a
          href="https://github.com/LNReader/lnreader"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LNReader
        </a>
        {`, an open-source light novel reader for Android with over 2.2k stars on GitHub and 1M+ downloads.`}
      </p>
      <p className="mb-4">
        {`I specialize in web and app development with React, TypeScript, and React Native.`}
      </p>
    </section>
  );
}
