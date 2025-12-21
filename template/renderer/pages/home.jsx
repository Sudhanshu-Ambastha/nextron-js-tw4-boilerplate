import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [message, setMessage] = React.useState('Ready for interaction...')

  React.useEffect(() => {
    // Listener function
    const handleMessage = (event, msg) => setMessage(msg)

    // Subscribe to IPC channel
    window.ipc.on('message', handleMessage)
    
    // Cleanup to prevent memory leaks and duplicate listeners
    return () => {
      window.ipc.removeAllListeners('message')
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Nextron + Tailwind v4 Boilerplate</title>
      </Head>

      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6 selection:bg-indigo-500/30">
        
        <div className="max-w-2xl w-full bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl border-t-zinc-700/50">
          
          <header className="flex flex-col items-center text-center space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-1 bg-zinc-900 rounded-full">
                <Image 
                  src="/images/logo.png" 
                  alt="Logo" 
                  width={100} 
                  height={100} 
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Nextron <span className="text-indigo-400">v9</span>
              </h1>
              <p className="text-zinc-400 text-lg font-medium">
                Tailwind CSS <span className="text-purple-400">v4</span> Boilerplate
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div className="p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/50">
              <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider text-left">Frontend</h3>
              <p className="text-zinc-400 text-sm mt-1 text-left">Next.js 14 (Pages Router) with vanilla JavaScript.</p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/50">
              <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider text-left">Styling</h3>
              <p className="text-zinc-400 text-sm mt-1 text-left">Tailwind v4 with PostCSS-bridge integration.</p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 px-8 py-4 bg-white text-zinc-950 font-bold rounded-2xl hover:bg-indigo-50 active:scale-[0.98] transition-all cursor-pointer shadow-xl shadow-indigo-500/10"
                onClick={() => window.ipc.send('message', 'Ping from Renderer')}
              >
                Test IPC Bridge
              </button>
              
              <Link 
                href="/next"
                className="flex-1 px-8 py-4 bg-zinc-800 text-white font-semibold rounded-2xl hover:bg-zinc-700 text-center transition-colors"
              >
                Go to Next Page
              </Link>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-indigo-500/5 rounded-xl blur-sm"></div>
              <div className="relative bg-black/40 border border-zinc-800 rounded-xl p-4 font-mono text-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-zinc-500 uppercase tracking-widest">System Output</span>
                </div>
                <p className="text-indigo-400 leading-relaxed truncate">
                  <span className="text-zinc-600 mr-2">$</span> {message}
                </p>
              </div>
            </div>
          </div>

          <footer className="mt-8 text-center">
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
              Lightweight • Scalable • Fast
            </p>
          </footer>
        </div>
      </div>
    </React.Fragment>
  )
}