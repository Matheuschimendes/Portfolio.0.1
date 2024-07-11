import Image from "next/image";
import FotoPerfil from "@/assets/Capa.png";

export function Sidebar() {
  return (
    <div className="flex justify-center items-center xl:absolute xl:top-0 xl:left-0 xl:w-full xl:max-w-[min(100vw,1728px)] xl:h-full xl:flex xl:items-stretch xl:justify-start xl:p-16">
      <div className="flex flex-col xl:flex-1 xl:px-0 xl:mr-20 w-full px-4">
        <div className="relative xl:sticky">
          <div className="w-[184px] xl:w-[184px] mx-auto xl:ml-0 mb-4 xl:mb-0">
            <Image src={FotoPerfil} width={184} height={184} alt="Foto de Perfil" />
          </div>
          <div className="w-full max-w-[500px] mx-auto xl:max-w-[calc(100vw - 1000px)] xl:ml-1">
            <div className="text-xl xl:text-2xl font-bold tracking-wide mb-3">
              <h2>Matheus Chimendes</h2>
            </div>
            <div className="text-gray-600 xl:text-lg">
              <p className="mb-5">
                👋 Oi! Me chamo Matheus Chimendes, Estou aprimorando minhas habilidades de programação fullstack (HTML, CSS, JavaScript, Next.js, React, Node). Sou um profissional dedicado, com forte espírito de equipe, sempre em busca de soluções ágeis e novas oportunidades para contribuir com o crescimento da empresa.
              </p>
              <p className="xl:text-base font-light">
                👨🏻‍💻 Aplique se você precisa de clareza num mundo obscuro.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Skills e Frameworks:</h3>
                <ul className="list-disc pl-6">
                  <li> <i className="devicon-html5-plain colored">HTML5</i>
</li>
                  <li>CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
