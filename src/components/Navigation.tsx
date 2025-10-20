import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import linkedinIcon from "@/assets/linkedin-icon.png";

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
              <a
                href="https://linkedin.com/in/alnaseralrais"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all"
              >
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  className="w-5 h-5 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" 
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
