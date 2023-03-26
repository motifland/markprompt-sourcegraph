import Head from 'next/head'
import { Markprompt } from '@/components/Markprompt'
import { MarkpromptIcon } from '@/components/icons/markprompt'
import { SourcegraphIcon } from '@/components/icons/sourcegraph'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sourcegraph + Markprompt</title>
        <meta name="description" content="Sourcegraph search powered by Markprompt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="flex flex-col gap-12 p-8 w-full items-center justify-center h-[calc(100vh-60px)]">
            <div className="w-full max-w-[720px] max-h-[480px] rounded-xl shadow-2xl bg-neutral-1100 p-8 flex-grow">
              <Markprompt onDark
          projectKey="3K9vHrh2Si4DOHTzGWjFxrHJiK4QZJqy" />
            </div>
            <div className="flex flex-row gap-8 items-center justify-center flex-none">
              <SourcegraphIcon className="w-10 h-10" />
              <p className="text-neutral-500 text-2xl">+</p>
              <MarkpromptIcon className="w-12 h-12" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
