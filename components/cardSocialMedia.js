const CardSocialMedia = ({icon, text, link}) => {
    return (
        <a href={link} className="rounded md:border-l-2 border-l-slate-400 transition-all duration-300 hover:md:border-slate-400 hover:md:scale-105 hover:md:bg-opacity-60 md:hover:bg-white px-10 py-3 w-1/2 font-semibold flex md:flex-row flex-col leading-loose md:gap-2 gap-0 backdrop-blur-lg items-center">
            {icon}
            {text}
        </a>
    )
}
export default CardSocialMedia