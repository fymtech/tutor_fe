import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export function LandingNavbar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    // Only add scroll listener on home page
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const tenPercent = viewportHeight * 0.1;

      console.log(
        "Scroll Y:",
        scrollY,
        "Threshold:",
        tenPercent,
        "Visible:",
        scrollY > tenPercent
      );

      // Show navbar when scrolled more than 10% of viewport height
      if (scrollY > tenPercent) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Check on mount in case already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <>
      {/* Static navbar at top */}
      <nav className="h-20 w-full z-40 absolute top-0 left-0">
        <div className="h-full flex items-center justify-between px-6 lg:px-12">
          <Link to="/" className="text-2xl font-bold text-primary">
            TutorHub
          </Link>
          <div className="flex items-center gap-4 ">
            <Link
              to="/login"
              className="text-sm font-medium p-4 px-8 rounded-full text-white border border-primary bg-secondary hover:bg-primary/90 transition-colors"
            >
              Valet
            </Link>
            <Link
              to="/login"
              className="p-4 px-8  text-white rounded-full border border-primary bg-secondary text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Sticky navbar that slides in - only on home page */}
      {isHomePage && (
        <nav
          className={`
            fixed top-0 left-0 h-20 w-full z-50
            transition-all duration-500 ease-out
            ${visible ? "translate-y-0 bg-background" : "-translate-y-full bg-transparent"}
          `}
        >
          <div className="h-full flex items-center justify-between px-6 lg:px-12">
            <div className="flex gap-8 justify-center items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                TutorHub
              </Link>
              <div className="relative max-w-2xl mx-auto group">
                <div className="relative flex bg-white dark:bg-card rounded-full p-1 border border-border">
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 px-4 bg-transparent text-lg focus:outline-none placeholder:text-muted-foreground/50"
                  />
                  <Link
                    to="/tutors"
                    className="bg-primary text-primary-foreground rounded-full p-2 font-bold hover:bg-primary/90 transition-all  flex items-center"
                  >
                    <span className="flex items-center text-muted-foreground text-xl">
                      <Search className="w-6 h-6 text-white" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <Link
                to="/login"
                className="text-sm font-medium p-4 px-8 rounded-full text-white border border-primary bg-secondary hover:bg-primary/90 transition-colors"
              >
                Valet
              </Link>
              <Link
                to="/login"
                className="p-4 px-8  text-white rounded-full border border-primary bg-secondary text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
