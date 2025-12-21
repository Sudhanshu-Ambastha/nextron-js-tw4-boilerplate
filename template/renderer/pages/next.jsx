import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function NextPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron Boilerplate</title>
      </Head>

      {/* Main Container */}
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6 selection:bg-purple-500/30">
        
        {/* Content Card */}
        <div className="max-w-md w-full bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
          
          {/* Icon/Visual Element */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center text-3xl">
              ⚡
            </div>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Navigation Successful
            </h1>
            <p className="text-zinc-400 text-sm leading-relaxed">
              You are now viewing the second page. This confirms that the 
              <span className="text-purple-400 font-mono mx-1">Next.js Router</span> 
              is functioning correctly within the Electron environment.
            </p>
          </div>

          {/* Navigation Action */}
          <div className="mt-10">
            <Link 
              href="/home"
              className="group flex items-center justify-center gap-2 w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-all active:scale-95"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Go Back Home
            </Link>
          </div>

          {/* Subtle Footer */}
          <div className="mt-8 text-center border-t border-zinc-800/50 pt-6">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
              Secondary Route • Pages Router
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}