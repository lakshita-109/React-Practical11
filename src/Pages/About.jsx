
function About() {
  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-400 to-violet-500 text-4xl shadow-xl shadow-pink-200 transition duration-300 hover:-rotate-6 hover:scale-110">
        💜
      </div>

      <p className="mb-4 rounded-full bg-pink-100 px-4 py-2 text-sm font-bold tracking-widest text-pink-700">
        GET TO KNOW US
      </p>

      <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-6xl">
        Welcome to the
        <span className="mt-2 block bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          About Page
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
        Discover more about our website, our ideas, and the creativity behind
        this little corner of the web.
      </p>

      <div className="mt-8 rounded-2xl border border-violet-100 bg-violet-50 px-6 py-4 text-violet-700 shadow-sm">
        <p className="font-semibold">Simple ideas. Beautiful experiences. ✨</p>
      </div>
    </div>
  );
}

export default About;
