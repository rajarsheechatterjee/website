import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

const nunitoRegular = readFileSync(
  join(process.cwd(), 'public/fonts/Nunito-Regular.ttf')
)
const nunitoBold = readFileSync(join(process.cwd(), 'public/fonts/Nunito-Bold.ttf'))

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Rajarshee Chatterjee'
  let description = url.searchParams.get('description')
  let date = url.searchParams.get('date')

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full text-white"
        style={{ backgroundColor: '#101418', fontFamily: 'Nunito' }}
      >
        <div tw="flex flex-col h-full w-full px-20 py-16 justify-between">
          <div tw="flex items-center justify-between text-3xl text-neutral-300">
            <div tw="flex">Rajarshee Chatterjee</div>
            <div tw="flex">Blog</div>
          </div>

          <div tw="flex flex-col">
            {date ? (
              <div tw="flex mb-6 text-3xl text-emerald-300">{date}</div>
            ) : null}
            <h1 tw="flex m-0 text-7xl font-bold leading-tight tracking-tight">
              {title}
            </h1>
            {description ? (
              <p tw="flex mt-8 max-w-4xl text-3xl leading-snug text-neutral-300">
                {description}
              </p>
            ) : null}
          </div>

          <div tw="flex items-center text-3xl text-neutral-400">
            rajarsheechatterjee.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Nunito',
          data: nunitoRegular,
          weight: 400,
        },
        {
          name: 'Nunito',
          data: nunitoBold,
          weight: 700,
        },
      ],
    }
  )
}
