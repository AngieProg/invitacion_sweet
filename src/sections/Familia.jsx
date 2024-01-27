import Separador from "../components/Separador";
import { familia } from "../constants";

const Familia = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center bg-black pt-10 pb-5 xl:px-3 xl:py-20">
      {familia.map((familiar, index) => (
        <div
          key={index}
          className="flex flex-col py-8 border-dark-pink border-4 items-center mb-5"
        >
          <h3 className="font-sofia text-xl mb-1 text-dark-brown xl:text-3.5xl">
            {familiar.titulo1}
          </h3>
          <div data-aos="fade-right">
            <h2 className="font-mea text-3.5xl text-center text-dark-brown xl:text-6xl">
              {familiar.titulo2}
            </h2>
          </div>
          <Separador width="[200px]" />
          <img
            src={familiar.img}
            alt="Padres"
            className="w-[250px] h-[180px] xl:w-[400px] xl:h-[300px] mt-2 mb-4"
            data-aos="flip-left"
          />
          <p
            className="font-sofia uppercase text-xl text-dark-brown px-8 text-center mt-2 xl:text-3.5xl"
            data-aos="flip-right"
          >
            {familiar.nombre1}
            <br /> &<br /> {familiar.nombre2}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Familia;
