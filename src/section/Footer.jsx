const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
       <div className="flex gap-6">
        <FooterIcon
          href="https://linkedin.com/in/aditya-gangil-5b8b98244"
          iconClass="fa-brands fa-linkedin"
          label="LinkedIn"
        />
        <FooterIcon
          href="https://github.com/developeradi12"
          iconClass="fa-brands fa-github"
          label="GitHub"
        />
        <FooterIcon
          href="mailto:adityagangil182@gmail.com"
          iconClass="fa-regular fa-envelope"
          label="Email"
        />
      </div>
      <p>© 2025 Aditya. All rights reserved.</p>
    </section>
  );
};

const FooterIcon = ({ href, iconClass, label }) => {
  return (
    <a
      href={href}
      className="relative group transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-6"
      target="_blank"
      rel="noopener noreferrer"
    >
       <i className={`${iconClass} text-xl`} />
      <span className="absolute top-[-1.5rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-black bg-opacity-70 px-2 py-0.5 rounded-md transition-all duration-300 whitespace-nowrap">
        {label}
      </span>
    </a>
  );
};
export default Footer;