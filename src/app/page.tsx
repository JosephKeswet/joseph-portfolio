"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      // Calculate the position and subtract the offset (e.g., 100px for the navbar)
      const offsetPosition = projectsSection.offsetTop - 100;

      // Smoothly scroll to the offset position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <BackgroundBeamsWithCollision className="w-full min-h-screen ">
      <main className="pt-28 md:pt-40 px-6 md:px-20">
        {/* Introduction Section */}
        <section className="flex flex-col gap-8 md:gap-10 text-white h-[55vh] justify-end">
          <h2 className="text-[18px] md:text-[24px] w-full max-w-[400px] md:max-w-[500px] font-light">
            I design clean, user-centered interfaces that transform ideas into
            impactful digital experiences, empowering clients to succeed online.
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
            <h1 className="text-[clamp(48px,5vw,48px)] md:text-[clamp(64px,8vw,96px)] w-full max-w-[680px] md:max-w-[980px] font-light leading-[1.1] md:leading-[90px] ">
              Product Development{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 font-bold">
                Experience
              </span>
            </h1>
            <div className="flex flex-col items-end md:items-start mt-4 md:mt-0">
              <Link
                href="mailto:jhezekiah19@gmail.com"
                className="text-slate-300 text-sm md:text-base"
              >
                jhezekiah19@gmail.com
              </Link>

              <p
                onClick={handleScrollToProjects}
                className="text-xs md:text-sm text-slate-400 text-right cursor-pointer"
              >
                Scroll to explore
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="projects"
          className="flex flex-col gap-28 md:gap-40 my-28 md:my-72 "
        >
          <h1 className="text-white text-[25px] md:text-[50px] ">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-52 md:gap-x-6  gap-y-52 md:gap-y-60  ">
            <PinContainer title="onionpay.io" href="https://onionpay.io/">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[500px]  ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Onionpay
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Swift payments for every business!
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/assets/OnionpayHome.png"
                    alt="Onionpay UI Preview"
                    className="w-full h-[700px] object-bottom"
                  />
                </div>

                {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
              </div>
            </PinContainer>
            <PinContainer title="smartel.org" href="https://www.smartelco.org/">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[500px]  ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Smartel
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Growing hope, sustaining the future.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/assets/SmartelHome.png"
                    alt="Smartel UI Preview"
                    className="w-full h-[5078px] object-bottom"
                  />
                </div>
                {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
              </div>
            </PinContainer>
            <PinContainer
              title="starkpay.africa"
              href="https://www.starkpay.africa/"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[500px]  ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  StarkPay
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Simplify your payments with StarkPay
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/assets/StarkpayHome.png"
                    alt="Starkpay UI Preview"
                    className="w-full h-[914px] object-bottom"
                  />
                </div>
                {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
              </div>
            </PinContainer>
            <PinContainer title="ekoplug.ng" href="https://www.ekoplug.ng/">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[500px]  ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Ekoplug
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">E-commerce</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/assets/EkoplugHome.png"
                    alt="Ekoplug UI Preview"
                    className="w-full h-[652px] object-bottom"
                  />
                </div>
                {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
              </div>
            </PinContainer>
          </div>
        </section>
      </main>
    </BackgroundBeamsWithCollision>
  );
}
