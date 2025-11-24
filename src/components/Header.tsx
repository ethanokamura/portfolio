import logo from "/logo.svg";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-1000 px-[5%] py-6 
                     bg-background/70 backdrop-blur-[20px] backdrop-saturate-180
                      shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8">
            <img
              src={logo}
              className="logo"
              alt="My Logo"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            className="text-xl font-semibold text-text tracking-tight 
                        transition-colors duration-300 hover:text-accent cursor-pointer"
          >
            Ethan Okamura
          </div>
        </div>

        <a
          href="mailto:ethanokamura3@gmail.com"
          className="hidden sm:block px-5 py-2.5 text-sm font-medium text-text bg-transparent 
                   border border-borderColor rounded-lg transition-all duration-300
                   hover:bg-accent hover:text-inverseTextColor hover:border-accent 
                   hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(125,196,255,0.3)]"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
