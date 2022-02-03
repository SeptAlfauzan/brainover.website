const CardSocialMedia = ({icon, text, link}) => {
    return (
        <a href={link} className="rounded md:border-l-2 border-l-slate-400 transition-all duration-300 hover:md:border-slate-400 hover:md:scale-105 hover:md:bg-opacity-60 md:hover:bg-white px-10 py-3 md:w-2/4 font-semibold flex md:flex-row leading-loose gap-2 backdrop-blur-lg">
            {icon}
            {text}
        </a>
    )
}
export default CardSocialMedia