import Image from "next/image";

const SliderCard = ({ images, title, description }) => {
  return (
    <div className="group w-76 relative m-2 h-80 rounded-lg bg-slate-400 p-0 transition-all duration-200">
      {images && <Image layout="fill" src={images} alt={title} />}
      <div className=" absolute bottom-0 w-full bg-gradient-to-t from-blue-100 to-transparent px-10 pb-5  pt-8 transition-all duration-200 md:translate-y-full md:group-hover:-translate-y-0">
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default SliderCard;
