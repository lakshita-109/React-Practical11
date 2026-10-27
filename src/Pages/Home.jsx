
function Home() {
  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-4xl shadow-xl shadow-purple-200 transition duration-300 hover:rotate-6 hover:scale-110">
        🏠
      </div>

      <p className="mb-4 rounded-full bg-violet-100 px-4 py-2 text-sm font-bold tracking-widest text-violet-700">
        WELCOME TO MY WEBSITE
      </p>

      <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-6xl">
        Welcome to the
        <span className="mt-2 block bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
          Home Page
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
        A little space on the internet with a fresh look, beautiful colors,
        and smooth navigation.
      </p>

      <LinkPlaceholder />
    </div>
  );
}

function LinkPlaceholder() {
  return (
    <div className="mt-8 rounded-full bg-violet-600 px-7 py-3 font-semibold text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl">
      ✨ Explore Something New
    </div>
  );
}

export default Home;
