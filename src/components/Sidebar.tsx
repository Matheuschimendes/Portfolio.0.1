import Image from "next/image";
import FotoPerfil from "@/assets/1.png";

export function Sidebar() {
  return (
    <div
      className="flex h-full w-full max-w-[428px] items-center justify-center p-6 pt-12 pb-0 xl:absolute xl:top-0 xl:max-w-[min(100vw,1728px)] xl:items-stretch xl:justify-start xl:p-16"
    >
      <div className="flex w-full flex-col px-4 xl:mr-20 xl:flex-1 xl:px-0 ">
        <div className="relative xl:stick ">
          <div className="s-[120px] xl:s-[184px]">
            <Image src={FotoPerfil} width={200} alt={""} />
          </div>
          <div
            className="ml-10 w-[calc(100%-8px)] max-w-[min(500px,100%-8px)]
            xl:max-w-[min(500px,calc(100vw-1000px))]"
          >
            <div
              className="text-[32px] font-bold tracking-[-1px] 
                xl:text-[35px] xl:tracking-[-2px]"
            >
              <div className="">
                <h2>Matheus Chimendes</h2>
              </div>
            </div>
            <div className="mt-3 text-[#565656] xl:mt-3 xl:text-lg">
              <div className="">
                <p>
                  👋 Oi! Me chamo Matheus Chimendes,
                  Estou aprimorando minhas
                  habilidades de programação fullstack (HTML, CSS, JavaScript,
                  NextJs, React, Node). Sou um profissional 
                  dedicado, com forte espírito de equipe, sempre em busca de 
                  soluções ágeis e novas
                  oportunidades para contribuir com o crescimento da empresa.
                </p>
                <p className="mt-5 xl:text-lg font-light">
                  👨🏻‍💻Aplique se você precisa de clareza num mundo obscuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
