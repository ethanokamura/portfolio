import logo from "/logo.svg";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-1000 px-[5%] py-6 
                     bg-base-100/70 backdrop-blur-[20px]"
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
          <div className="text-xl font-semibold text-base-content tracking-tight ">
            Ethan Okamura
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <a
            href="#experience"
            className="text-base-content/70 hover:text-base-content text-lg"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-base-content/70 hover:text-base-content text-lg"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-base-content/70 hover:text-base-content text-lg"
          >
            Skills
          </a>
          <br />
          <a
            href="mailto:ethanokamura3@gmail.com"
            className="hidden sm:block px-5 py-2.5 text-sm font-medium text-base-content bg-transparent 
          border border-borderColor rounded-lg transition-all duration-300
          hover:bg-primary hover:text-inverseTextColor hover:border-primary 
          hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(125,196,255,0.3)]"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
