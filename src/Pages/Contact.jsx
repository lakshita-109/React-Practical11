
function Contact() {
  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-4xl shadow-xl shadow-purple-200 transition duration-300 hover:rotate-6 hover:scale-110">
        ✉️
      </div>

      <p className="mb-4 rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-bold tracking-widest text-fuchsia-700">
        LET'S CONNECT
      </p>

      <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-6xl">
        Welcome to the
        <span className="mt-2 block bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
          Contact Page
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
        Have a question or an idea to share? We'd love to hear from you.
      </p>

      <a
        href="mailto:hello@example.com"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        ✉️ Get in Touch
      </a>

      <p className="mt-4 text-xs text-gray-400">
        Replace hello@example.com with your email address.
      </p>
    </div>
  );
}

export default Contact;
