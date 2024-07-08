import Image from "next/image";
import img from "@/assets/1.png";
import lpItauImage from "@/assets/lp-itau.png";
import { CardImg } from "./cards/CardImg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MainContent() {
  return (

      <div className="xl:ml-[40%] xl:m-0 m-[0] xl:pt-10 pt-10 ml-0 p-6 xl:mt-20 grid grid-cols-1">
        <h3 className="text-xl font-bold mb-4">Trabalhos feitos:</h3>
        <div className="grid xl:grid-cols-2 grid-cols-1  gap-10 mb-20">
          <div>
            <a
              href="https://lp-itau-asvioyid8-matheuschimendes-projects.vercel.app/"
              target="_blank"
            >
              <CardImg
                src={lpItauImage}
                title="Lp-Itau"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Mais do meu:</h3>
          <div className="grid grid-cols-1 xl:grid-cols-2  gap-10">
            <div className="shadow-md rounded-3xl">
              <CardImg
                src={lpItauImage}
                title="a"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
            <div>
              <CardImg
                src={lpItauImage}
                title="a"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
            <div>
              <CardImg
                src={lpItauImage}
                title="a"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
            <div>
              <CardImg
                src={lpItauImage}
                title="Foto1"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 mt-20">Entre em contato:</h3>
          <div className="grid grid-cols-1 xl:grid-cols-2  gap-10">
            <div className="shadow-md rounded-3xl">
              <CardImg
                src={lpItauImage}
                title="a"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
            <div>
              <CardImg
                src={lpItauImage}
                title="a"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
            <div>
              <CardImg
                src={lpItauImage}
                title="a"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
            <div>
              <CardImg
                src={lpItauImage}
                title="Foto1"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 mt-20">Entre em contato:</h3>
          <div className="grid grid-cols-1 xl:grid-cols-2  gap-10">
            <div className="shadow-md rounded-3xl">
              <CardImg
                src={lpItauImage}
                title="a"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
            <div>
              <CardImg
                src={lpItauImage}
                title="a"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
            <div>
              <CardImg
                src={lpItauImage}
                title="a"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
            <div>
              <CardImg
                src={lpItauImage}
                title="Foto1"
                alt=""
                width={0}
                height={0}
                clasName={""}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
