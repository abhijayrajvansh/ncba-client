import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Code, Database, Key, Lock, Server, Zap } from "lucide-react"

const Home = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-black">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 mb-10">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10 lg:text-6xl/none">
                  Open Banking API
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Unlock the power of financial data with our secure and scalable Open Banking API. Build innovative
                  fintech solutions faster than ever before.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="outline" size={'lg'} disabled>
                  View Documentation
                </Button>
                <Button asChild size={'lg'} className='font-bold text-md'>
                  <Link href={'/apis'}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Lock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Secure Authentication</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Industry-standard OAuth 2.0 and OpenID Connect protocols for robust security.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Zap className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Real-time Data</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Access up-to-the-minute financial data for accounts, transactions, and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Server className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Scalable Infrastructure</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Built on a robust, cloud-native architecture to handle millions of requests.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home
