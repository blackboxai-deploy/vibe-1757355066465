export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Hello World!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light">
            Welcome to your first Next.js application
          </p>
        </div>
        
        <div className="mt-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <p className="text-lg text-gray-600">
            🎉 Congratulations! Your app is up and running.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default">
            Built with Next.js
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default">
            Styled with Tailwind
          </div>
        </div>
      </div>
    </main>
  );
}