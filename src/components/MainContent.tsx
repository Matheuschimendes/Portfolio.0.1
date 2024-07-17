import Image from "next/image";

import { CardImg } from "./cards/CardImg";

import lpItau from "@/assets/LandingPage.png";
import TodoList from "@/assets/TodoList.png";
import Turistico from "@/assets/DestinoTuristico.png";
import Pokedex from "@/assets/Pokedex.png";
import Movie from "@/assets/Movie.png";
import Contato from "@/assets/Contato.png";
import Pay from "@/assets/pay.png";
import next from "@/assets/iconSkils/svg/next-js.svg";
import react from "@/assets/iconSkils/svg/react.svg";
import node from "@/assets/iconSkils/svg/node.svg";
import javascript from "@/assets/iconSkils/svg/javascript.svg";
import linkdin from "@/assets/linkdin.png";
import gitHub from "@/assets/github.png";
import Whats from "@/assets/Whats.png";

export function MainContent() {
  return (
    <div className="mx-auto max-w-screen-md px-4 xl:ml-[40%] xl:m-0 xl:pt-10 pt-10 xl:p-6 p-4 xl:mt-10 grid grid-cols-1 gap-10">
      <h3 className="text-xl font-bold">Skills e Frameworks:</h3>
      <div className="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-5">
        <div className="lg:grid lg:grid-cols-2 grid grid-cols-3 gap-5">
          <li className="flex items-center">
            <CardImg src={next} title={`Foto`} alt="" width={0} height={0} />
            <h1 className="m-2">Next.Js</h1>
          </li>
          <div className="flex items-center">
            <CardImg src={react} title={`Foto`} alt="" width={30} height={30} />
            <h1 className="m-2">React.Js</h1>
          </div>
          <div className="flex items-center">
            <CardImg src={node} title={`Foto`} alt="" width={30} height={30} />
            <h1 className="m-2">Node</h1>
          </div>
          <div className="flex items-center">
            <CardImg src={react} title={`Foto`} alt="" width={30} height={30} />
            <h1 className="m-2">React Native</h1>
          </div>
          <div className="flex items-center">
            <CardImg
              src={javascript}
              title={`Foto`}
              alt=""
              width={30}
              height={30}
            />
            <h1 className="m-2">JavaScript</h1>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Projetos Feitos:</h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
          <a href="https://to-do-list-six-cyan-20.vercel.app/" target="_blank">
            <div className="shadow-md rounded-3xl overflow-hidden">
              <CardImg
                src={TodoList}
                title={`Foto`}
                alt=""
                width={0}
                height={0}
              />
            </div>
          </a>
          <a href="https://destinos-turisticos.vercel.app/" target="_blank">
            <div className="shadow-md rounded-3xl overflow-hidden ">
              <CardImg
                src={Turistico}
                title={`Foto`}
                alt=""
                width={0}
                height={0}
              />
            </div>
          </a>
          <a href="https://lp-itau-lake.vercel.app/" target="_blank">
            <div className="shadow-md rounded-3xl overflow-hidden">
              <CardImg
                src={lpItau}
                title={`Foto`}
                alt=""
                width={0}
                height={0}
              />
            </div>
          </a>
          <a href="https://explorer-lab-beryl.vercel.app/" target="_blank">
            <div className="shadow-md rounded-3xl overflow-hidden">
              <CardImg src={Pay} title={`Foto`} alt="" width={0} height={0} />
            </div>
          </a>
          <a href="https://movie-api-ten-nu.vercel.app/" target="_blank">
            <div className="shadow-md rounded-3xl overflow-hidden">
              <CardImg src={Movie} title={`Foto`} alt="" width={0} height={0} />
            </div>
          </a>
          <a
            href="https://js-developer-pokedex-sable-ten.vercel.app/"
            target="_blank"
          >
            <div className="shadow-md rounded-3xl overflow-hidden">
              <CardImg
                src={Pokedex}
                title={`Foto`}
                alt=""
                width={0}
                height={0}
              />
            </div>
          </a>
          <a
            href="https://agenda-de-contatos-rouge.vercel.app/"
            target="_blank"
          >
            <div className="shadow-md rounded-3xl overflow-hidden">
              <CardImg
                src={Contato}
                title={`Foto`}
                alt=""
                width={0}
                height={0}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="sm:mx-auto">
        {" "}
        {/* Centraliza em telas de tamanho tablet */}
        <h3 className="text-xl font-bold mb-4 mt-20">Entre em contato:</h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div
            className=" border border-b-slate-300
          bg-cyan-50 shadow-md rounded-3xl overflow-hidden
          hover:border-gray-500"
          >
            <div className="h-[150px] w-[400px]">
              <div className="flex-1 m-5 mt-5 rounded-md">
                <CardImg
                  src={linkdin}
                  title={`linkdin`}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="m-5">
                <h1 className="font-normal">Linkdin</h1>
                <div
                  className="mt-1 h-[30px] max-w-fit
                bg-[#1b88c3] rounded-md items-center"
                >
                  <a
                    className="font-extralight text-xs p-3 text-white"
                    href="https://www.linkedin.com/in/matheus-chimendes/"
                  >
                    @matheuschimendes
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" border border-b-slate-300 shadow-md 
          rounded-3xl overflow-hidden bg-slate-200 
          hover:border-gray-500"
          >
            <div className="h-[150px] w-[400px]">
              <div className="flex-1 m-5 mt-5 rounded-md">
                <CardImg
                  src={gitHub}
                  title={`Foto`}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="m-5">
                <h1 className="font-normal">GitHub</h1>
                <div
                  className="mt-1 h-[30px] max-w-fit bg-slate-950 
                rounded-md items-center hover:border-gray-500"
                >
                  <a
                    className="font-extralight text-xs p-3 text-white"
                    href="https://github.com/Matheuschimendes"
                  >
                    @matheuschimendes
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" border border-b-slate-300 bg-[#7fd0853c] 
          shadow-md rounded-3xl overflow-hidden  hover:border-gray-500"
          >
            <div className="h-[150px] w-[400px] ">
              <div className="flex-1 m-5 mt-5 rounded-md ">
                <CardImg
                  src={Whats}
                  title={`Foto`}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="m-5 items-center bg-">
                <h1 className="font-normal ">WhatsApp</h1>
                <div
                  className="mt-1 h-[30px] max-w-fit 
                rounded-md items-center"
                >
                  <a
                    className="font-extralight text-xs "
                    href="https://wa.me/5598996020952"
                  >
                    (98) 99602-0952
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
