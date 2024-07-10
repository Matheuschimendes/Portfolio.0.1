import { StaticImageData } from 'next/image';

export type PropsType = {
    title: string;
    src: string | StaticImageData;
    alt: string;
    width: number;
    height: number;
};