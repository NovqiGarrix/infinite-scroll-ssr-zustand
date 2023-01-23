import { FunctionComponent } from "react";
import Image from "next/image";

interface ICardComponent {
  imageURL: string;
  cardLabel: string;
  rating: string;
}

const CardComponent: FunctionComponent<ICardComponent> = (props) => {
  const { imageURL, cardLabel, rating } = props;

  const starRaw = Number(rating).toFixed(1);

  const title =
    cardLabel.length < 35 ? cardLabel : `${cardLabel.slice(0, 35)}...`;

  return (
    <div className="rounded cursor-pointer transform transition-all group duration-100 hover:scale-105 relative">
      <div className="">
        <Image
          width={200}
          height={300}
          src={imageURL}
          loading="lazy"
          className="rounded-lg w-full h-full"
          alt={cardLabel}
        />
      </div>

      <div className="absolute top-2 right-2 md:top-3 md:right-3 flex items-center py-[2px] bg-red-600/80 px-3 md:px-4 rounded-full">
        <span className="text-gray-200 font-bold text-[10px] md:text-[12px] font-poppins">
          {starRaw}
        </span>
      </div>

      <h3 className="text-sm md:text-[13px] lg:text-[14px] text-gray-300 font-poppins mt-3 h-16 md:h-12 duration-150 transition group-hover:text-gray-50 group-hover:font-medium">
        {title}
      </h3>
    </div>
  );
};

export default CardComponent;
