import Image from "next/image";
import { PropsType } from "@/components/cards_props/CardProps";

export function CardImg(props: PropsType) {
  return (
    <div className="">
      <Image
        title={props.title}
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className=" shadow-xl rounded-3xl"
      />
    </div>
  );
}
