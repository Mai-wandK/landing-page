import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const Navbar = ({ theme, setTheme }) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-[#111111] dark:text-white border-b border-gray-200 dark:border-gray-700 shadow-md duration-300"
    >
      <div className="container py-4 md:py-2">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif text-primary">Lorem Ipsum Inc.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {/* DarkMode feature implement */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer hover:text-yellow-500 transition-colors duration-300"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-300"
              />
            )}
          </nav>
          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer hover:text-yellow-500 transition-colors duration-300"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-300"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
