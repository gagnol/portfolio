"use client";

import Cardgrid from "@/components/Card";

const projectLinks = [

  {
    title: 'Ecommerce',
    links: [
      { name: "Beauty", img: "/glow.jpg", description: "Skin Care", technology: "✔️Next.js", url:"https://glowing-main.vercel.app/" },
      { name: "Fashion", img: "/legendary.jpg", description: "Ecommerce clothes - online store",
       technology: "✔️Next.js, MongoDb, Redux", url:"https://fashion-2024.vercel.app/" },
      { name: "Furniture", img: "/fur101.jpg", description: "Ecommerce Furniture", technology: "✔️Next.js, Radix UI", url:"https://furniturer.vercel.app/" },
     
      { name: "Food", img: "/youtube1.png", description: "Food Ordering", technology: "✔️Next.js", url:"https://la-bisteca.vercel.app" },
    ],
  },
  {
    title: 'Entretaiment',
    links: [
      { name: "Rapture TV", img: "/cine4.webp", description: "Church entretaiment and podcast ", technology: "✔️Next.js", url:"https://tv-six-liard.vercel.app/" },
      { name: "Movies Paradise", img: "/movies.avif", description: "Imdb movies and Tv series",
       technology: "✔️React-✔️API", url:"https://react-movies-paradise.vercel.app" },
    ],
  },
  {
    title: 'Others',
    links: [
      { name: "AirBnb", img: "/youtube1.png", description: "Airbnb clone", 
      technology: "✔️Next.js", url:"" },
      { name: "Figma", img: "/figma.jpg", description: " Figma clone",
       technology: "✔️Next.js", url:"https://figma-clone-git-main-gagnol.vercel.app/" },

    ],
  },
  {
    title: 'UI/UX',
    links: [
      { name: "Luxury", img: "/luxury.svg", description: "Luxury Ristorante landing page", 
      technology: "✔️Next.js", url:"https://la-bisteca.vercel.app" },
      { name: "Profesional", img: "/profesional.jpg", description: "profesional landing page",
       technology: "✔️Next.js", url:"https://Next.js-portfolio-main-gamma.vercel.app", },
       { name: "Modern", img: "/pinki.png", description: "Modern landing page",
       technology: "✔️React", url:"https://ux-ui-modern.vercel.app/", },

    ],
  },
]



const PortfolioPage = () => {
  return (
    <main className="h-full bg-base-100 overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto py-20 overflow-x-hidden ">
        <h1 className="font-bold text-3xl m-5 text-center">MY PORTFOLIO</h1>
        {projectLinks.map((project, index) => (
          <div key={index} className="pb-2" >
            <h2 className="font-bold text-2xl my-1 mx-5">{project.title}</h2>
            <div className="w-full px-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 py-2 ">
              {project.links.map((link, linkIndex) => (
                <div key={linkIndex} className="p-0">
                  <h3 className="text-lg font-semibold" >{link.name}</h3>
                 <Cardgrid link={link}/>
                 
                </div>
              ))}
            </div>
          </div>
        ))}
      
       
      </div>
    </main>
  );
};

export default PortfolioPage;
