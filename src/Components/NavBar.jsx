
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
      location.pathname === path
        ? "bg-white text-violet-700 shadow-lg"
        : "text-white hover:bg-white/15"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-pink-50 to-purple-100">
      <nav className="sticky top-0 z-50 border-b border-white/20 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 shadow-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide text-white transition hover:scale-105"
          >
            ✨ My<span className="text-pink-200">Website</span>
          </Link>

          <ul className="flex flex-wrap justify-center gap-2">
            <li>
              <Link to="/" className={linkStyle("/")}>
                🏠 Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkStyle("/about")}>
                💜 About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkStyle("/contact")}>
                ✉️ Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="min-h-[65vh] rounded-3xl border border-white/80 bg-white/80 p-6 shadow-2xl shadow-violet-200/50 backdrop-blur-lg sm:p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="py-8 text-center text-sm font-medium text-violet-600">
          Made with 💗 using React & Tailwind CSS
        </footer>
      </main>
    </div>
  );
}

export default NavBar;
