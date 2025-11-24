import logo from "/logo.svg";

export default function Footer() {
  return (
    <footer className="py-12 px-[5%] bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16">
              <img
                src={logo}
                className="logo"
                alt="My Logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="md:text-left">
              <div className="text-xl font-semibold text-text tracking-tight mb-2">
                Ethan Okamura
              </div>
              <p className="text-sm text-hintText">
                Founding Product Engineer & Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="mailto:ethan@ucsc.edu"
              className="text-subtext hover:text-text transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
