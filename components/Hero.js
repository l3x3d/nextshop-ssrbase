import Link from 'next/link'

export default function Hero() {
  return (
    <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">/////////////////</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-indigo-500 to-gray-900 text-4xl sm:text-6xl md:text-7xl">falsezero headless boilerplate
        </p>
      </h1>
      <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        /components/hero.js
      </h2>
      <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
        <a href="https://falsezero.io" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800">
          Button
        </a>
        <a href="https://falsezero.io" className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800">
          Button
        </a>
      </div>
    </div>
  )
}
