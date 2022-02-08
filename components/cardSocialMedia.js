const CardSocialMedia = ({ icon, text, link }) => {
  return (
    <a
      href={link}
      className="flex w-1/2 flex-col items-center gap-0 rounded border-l-slate-400 px-10 py-3 font-semibold leading-loose backdrop-blur-lg transition-all duration-300 md:flex-row md:gap-2 md:border-l-2 hover:md:scale-105 hover:md:border-slate-400 md:hover:bg-white hover:md:bg-opacity-60"
    >
      {icon}
      {text}
    </a>
  );
};
export default CardSocialMedia;
