export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <div className="space-y-12">
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-1">
              <a
                href="https://www.lnreader.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LNReader
              </a>
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              2.2k+ stars · 1M+ downloads
            </p>
          </div>
          <div>
            <p className="text-neutral-600 dark:text-neutral-400">
              An open-source light novel reader for Android inspired by
              Tachiyomi. Features offline downloads, custom themes, and 200+
              community-maintained plugins. Along with the app, there are
              multiple side projects including plugins, a Discord bot, a CLI
              tool, a self-hostable backup server, and this website.
            </p>
            <div className="flex gap-3 text-sm pt-1">
              <a
                href="https://github.com/LNReader/lnreader"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
              >
                GitHub
              </a>
              <a
                href="https://www.lnreader.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
