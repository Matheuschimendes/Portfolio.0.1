import { MainContent } from "@/components/MainContent";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  
  return (
    <>
      <div className="min-full-screen flex flex-col items-center justify-center">
        <div className="min-full-screen flex w-full max-w-[1728px] flex-col">
          <div className="xl:grid xl:grid-cols-2">
            <aside className="self-start xl:sticky xl:ml-0 top-0 col-span-1">
              <Sidebar />
            </aside>
            <main className="col-span-6">
              <MainContent />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
