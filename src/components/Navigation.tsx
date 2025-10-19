import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };
  const location = useLocation();
  
  const links = [
    { path: "/cv", label: "CV" },
    { path: "/blog", label: "Blog" },
    { path: "/publications", label: "Publications" },
    { path: "/github", label: "Github" },
  ];

  return (
    <nav className="w-full py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <ul className="flex justify-center gap-12 flex-1">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-lg transition-colors hover:text-accent ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-4"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
