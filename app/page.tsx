export default function Page() {
  return (
    <>
      <section className="mb-16">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Hey, I'm Rajarshee Chatterjee
        </h1>
        <p className="mb-4">
          {`I'm a Senior Software Engineer at Harness, working on the frontend for `}
          <span>
            <svg
              fill="none"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-4 h-4 inline-block mb-1"
            >
              <linearGradient
                id="ccm-gradient"
                gradientUnits="userSpaceOnUse"
                x1="5.82144"
                x2="19.2714"
                y1="4.39288"
                y2="33.4695"
              >
                <stop offset="0" stopColor="#00cfde" />
                <stop offset="1" stopColor="#05a660" />
              </linearGradient>
              <path
                d="m15.8394 26.5523c0 .2761.2238.5.5.5h8.0588.0232.0232.2389v-.0051c3.5119-.1376 6.3167-3.0281 6.3167-6.5737 0-3.4495-2.6549-6.279-6.0329-6.5565-.2398-.0197-.442-.1933-.4922-.4286-.9123-4.27903-4.7139-7.4884-9.2651-7.4884-5.23211 0-9.47354 4.2414-9.47354 9.4735 0 .0552-.03939.1027-.09349.1135-2.64826.532-4.64297 2.871-4.64297 5.6759 0 3.1973 2.59185 5.7892 5.78912 5.7894h6.66088c.2761 0 .5-.2239.5-.5v-1.5683c0-.252-.1881-.4625-.4356-.51-1.0412-.1997-1.9326-.6294-2.5427-1.2443-.5458-.55-.8716-1.2314-.97288-2.0316-.03504-.277.19468-.5054.47378-.5041l1.1137.0052c.2673.0013.4802.2149.5411.4752.2559 1.093 1.2451 1.8129 2.7106 1.8198.571.0027 2.7002-.2641 2.7071-1.7358.0055-1.1769-1.5419-1.6233-3.0059-1.9847-.2495-.0615-.5038-.1243-.758-.1925-1.6559-.4399-3.4076-.9432-3.3977-3.0618.0096-2.0579 1.7418-3.1193 3.5665-3.3355v-1.9735c0-.2761.2238-.5.5-.5h.8875c.2762 0 .5.2239.5.5v2.0272c1.316.2124 3.0881.8785 3.3886 2.9069.0413.2786-.1898.512-.4714.5107l-1.1191-.0052c-.2568-.0012-.4637-.1999-.5405-.4449-.2901-.9266-1.2-1.4883-2.5323-1.4946-.8862-.0041-2.1707.4661-2.1757 1.5402-.0046.9735.7404 1.3051 3.5205 2.0234l.3681.094c.0465.0115.0961.0235.1484.0361 1.0591.2554 3.2322.7795 3.2213 3.1092-.0085 1.8391-1.2649 3.097-3.3644 3.4714-.2503.0446-.4416.2562-.4416.5105z"
                fill="url(#ccm-gradient)"
              />
            </svg>
            {` Cloud Cost Management`}
          </span>
          {`. I work fullstack at times and build tools that simplify complex problems or things I'm interested in.`}
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
          {`, an open-source light novel reader for Android with over 2.3k stars on GitHub and 1M+ downloads.`}
        </p>
        <p>
          {`I specialize in web and app development with React, TypeScript, and React Native.`}
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
          Experience
        </h2>
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <path
                  d="m22.9736 8.18585-6.2654-6.30553c-.1103-.11108-1.0951-1.07656-2.5893-1.572117-2.1394-.717703-4.26188-.153793-5.98529 1.572117l-6.26542 6.30553c-.11036.11107-1.069701 1.10219-1.562105 2.60595-.713136 2.1531-.152815 4.2891 1.562105 6.0236l6.26542 6.3055c.11037.1111 1.09517 1.0766 2.58939 1.5807.6112.205 1.214.3076 1.8083.3076 1.5027 0 2.9459-.6408 4.1769-1.8797l6.2654-6.3056c.1104-.111 1.0698-1.1022 1.5622-2.6059.7131-2.1617.1528-4.2977-1.5622-6.03215zm-10.0688-4.4771c.7047.2136 1.231.70061 1.2735.73479l1.8508 1.86261-3.6082 3.63124-3.60811-3.63124 1.85921-1.87115c.5009-.49556 1.1971-1.03384 2.2328-.72625zm-9.21981 8.30485c.21225-.7092.69616-1.2389.73012-1.2816l1.85076-1.86262 3.60813 3.63122-3.60813 3.6313-1.85925-1.8712c-.4924-.5041-1.02726-1.2133-.72163-2.2471zm8.25201 9.2789c-.7046-.2136-1.231-.7006-1.2735-.7348l-1.85071-1.8626 3.60811-3.6313 3.6082 3.6313-1.8593 1.8711c-.5009.4956-1.2055 1.0339-2.2328.7263zm9.2198-8.3049c-.2122.7092-.6961 1.2389-.7301 1.2816l-1.8507 1.8627-3.6082-3.6313 3.6082-3.63122 1.8592 1.87112c.4924.5041 1.0273 1.2047.7216 2.2471z"
                  fill="#4facdf"
                />
              </svg>
              <div>
                <h3 className="text-lg font-medium">Harness</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Bengaluru, Karnataka, India
                </p>
              </div>
            </div>
            <div className="space-y-6 relative pl-4">
              <div className="relative pl-8">
                <div className="absolute w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rounded-full left-0 top-2 -translate-x-1/2"></div>
                <div className="absolute border-l border-neutral-200 dark:border-neutral-800 h-full left-0 top-6 -translate-x-1/2" />
                <div className="space-y-1">
                  <div>
                    <h4 className="text-base font-medium">
                      Senior Software Engineer
                    </h4>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Sep 2024 - Present
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rounded-full left-0 top-2 -translate-x-1/2"></div>
                <div className="absolute border-l border-neutral-200 dark:border-neutral-800 h-full left-0 top-6 -translate-x-1/2" />
                <div className="space-y-1">
                  <h4 className="text-base font-medium">
                    Software Engineer II
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    May 2024 - Present
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rounded-full left-0 top-2 -translate-x-1/2"></div>
                <div className="absolute border-l border-neutral-200 dark:border-neutral-800 h-full left-0 top-6 -translate-x-1/2" />
                <div className="space-y-1">
                  <h4 className="text-base font-medium">Software Engineer</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Jul 2022 - May 2024
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rounded-full left-0 top-2 -translate-x-1/2"></div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-base font-medium">
                      Software Developer Intern
                    </h4>
                    <span className="inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium border-transparent bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
                      Internship
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Jan 2022 - Jul 2022 · 7 mos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
          Projects
        </h2>
        <div className="space-y-12">
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-1">
                <a
                  href="https://www.lnreader.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LNReader
                </a>
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                2.3k+ stars · 1M+ downloads
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
    </>
  );
}
