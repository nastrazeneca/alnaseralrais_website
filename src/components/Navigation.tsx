import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: "/cv", label: "CV" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <nav className="w-full py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className={`text-lg transition-colors hover:text-accent ${
              location.pathname === "/"
                ? "text-accent"
                : "text-muted-foreground"
            }`}
          >
            <Home size={20} />
          </Link>
          <ul className="flex gap-12 items-center">
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
            <li>
              
                href="https://linkedin.com/in/alnaseralrais"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all hover:brightness-0 hover:saturate-100 hover:invert-[0.6] hover:sepia-[1] hover:hue-rotate-[5deg]"
              >
                <img 
                  src="/linkedin-icon.png" 
                  alt="LinkedIn" 
                  className="w-5 h-5 opacity-60"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
