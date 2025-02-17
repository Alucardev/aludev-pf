import desktop from "../assets/desktop.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Código a tu medida,{" "}
        <span className="bg-gradient-to-r from-[#A84D76] to-[#842d56] text-transparent bg-clip-text">
          soluciones a tu ritmo.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Transformamos ideas en aplicaciones funcionales con un enfoque en calidad y flexibilidad, adaptándonos a las necesidades de cada proyecto.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-[#A84D76] to-[#842d56] py-3 px-4 mx-3 rounded-md text-white shadow-md shadow-[#A84D76] hover:opacity-80 transition"
        >
          Contacto
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border border-[#A84D76] text-[#A84D76] hover:bg-[#A84D76] hover:text-white transition"
        >
          Más información
        </a>
      </div>
      {/* Contenedor de la imagen con ancho completo */}
      <div className="w-screen mt-10">
        <img
          src={desktop}
          alt="Desktop"
          className="rounded-lg w-full h-80 object-cover border border-[#A84D76] shadow-sm shadow-[#A84D76]"
        />
      </div>
    </div>
  );
};

export default HeroSection;