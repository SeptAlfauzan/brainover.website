import Image from "next/image"

const SliderCard = ({images, title, description}) => {
    return(
        <div className="group transition-all duration-200 bg-slate-400 w-76 p-0 m-2 h-80 rounded-lg relative">
                { images && (<Image layout="fill" src={images} alt={title} />)}
            <div className=" md:group-hover:-translate-y-0 md:translate-y-full bottom-0 transition-all duration-200 absolute bg-gradient-to-t from-blue-100  to-transparent w-full px-10 pb-5 pt-8">
                <h3 className="font-bold text-black text-lg">
                    {title}
                </h3>
                <p className="text-slate-500">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default SliderCard