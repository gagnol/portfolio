import BgPage from "@/components/BgPage";
import Mobile from "@/components/mobile";
import Skill from "@/components/skill";
import { Quote } from "@radix-ui/themes";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center
     justify-between px-20">
      <BgPage/>
      <div >
        <div className="flex">
      <div className=" w-[350px] xl:w-[650px] h-fit flex rounded-[5px]
         my-5 opacity-75 border border-[#666] 
         px-[26px] py-[20px] bg-white/10 backdrop-blur-lg 
         shadow-[1px_1px_5px_#BABECC,_-5px_-5px_10px_#ffffff73] p-4
         ">
          
          <Image
           src="/guille_agnol.png"
            alt=""
            priority
            width={150}
            height={150}
            className="bg-white  object-cover rounded-md "
          />
      
          <div className="block pl-5">
           <h1 className=" mt-10 text-3xl sm:text-1xl
            lg:text-2xl lg:leading-normal font-extrabold">
          Guillermo Agnoletti
        </h1>
        <h3 className="text-base sm:text-lg mb-6 lg:text-lg" > 
        SENIOR FULLSTACK DEVELOPER 
        </h3>
              </div>
                </div>
                 </div>
          <div className="w-[300px] xl:w-[600px] bg-white/10 backdrop-blur-lg 
         shadow-[1px_1px_5px_#BABECC,_-5px_-5px_10px_#ffffff73] p-5 m-5">
          {/* BIOGRAPHY TITLE */}
          <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
          {/* BIOGRAPHY DESC */}
          <p className="text-lg">
          I am a highly skilled professional with 6 years of hands-on
           experience specializing in the utilization of the
            NextJS framework with TypeScript and Tailwind CSS. 
            My expertise lies in developing robust and scalable server-side applications, 
            seamlessly integrated with MongoDB for efficient data interaction. 
            I bring a wealth of knowledge and a proven track record of successful project delivery. 
            
          </p>
          {/* BIOGRAPHY QUOTE */}
          <Quote>
          I am excited about the
          prospect of collaborating on your project 
          and leveraging my skills to contribute to its success
          </Quote>
          </div>
         
        </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 
      before:dark:opacity-10 after:dark:from-sky-900
       after:dark:via-[#0141ff] after:dark:opacity-40 
       before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 
          hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
       
      </div>
      <Mobile/>
      <Skill/>
    </main>
  );
}
