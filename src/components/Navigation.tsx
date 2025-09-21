import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Leaf, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-natural group-hover:shadow-glow transition-all duration-300">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-serif font-semibold text-foreground">
              AyurVeda
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/upload"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/upload") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Analyze
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-lg">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Logo */}
                  <Link to="/" onClick={closeSheet} className="flex items-center space-x-2 group">
                    <div className="p-2 bg-gradient-primary rounded-lg shadow-natural">
                      <Leaf className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-serif font-semibold text-foreground">
                      AyurVeda
                    </span>
                  </Link>

                  {/* Navigation Links */}
                  <div className="flex flex-col space-y-4">
                    <Link
                      to="/"
                      onClick={closeSheet}
                      className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
                        isActive("/") 
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      onClick={closeSheet}
                      className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
                        isActive("/about") 
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      About
                    </Link>
                    <Link
                      to="/upload"
                      onClick={closeSheet}
                      className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
                        isActive("/upload") 
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      Analyze
                    </Link>
                    <Link
                      to="/contact"
                      onClick={closeSheet}
                      className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
                        isActive("/contact") 
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      Contact
                    </Link>
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                    <Link to="/login" onClick={closeSheet}>
                      <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
                        <User className="h-4 w-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                    <Link to="/register" onClick={closeSheet}>
                      <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;