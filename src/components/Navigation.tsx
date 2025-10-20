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
              
                href="https://linkedin.com/in/alnaseralrais"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src={linkedinIcon}
                  alt="LinkedIn" 
                  className="w-5 h-5 brightness-0 invert opacity-70 hover:brightness-[2] hover:saturate-[8] hover:hue-rotate-[15deg] hover:contrast-[0.8] transition-all"
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
