import Separador from "../components/Separador";
import { familia } from "../constants";

const Familia = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center bg-black pt-10 pb-5">
      {familia.map((familiar, index) => (
        <div
          key={index}
          className="flex flex-col py-8 border-dark-pink border-4 items-center mb-5"
        >
          <h3 className="font-sofia text-xl mb-1 text-dark-brown">
            {familiar.titulo1}
          </h3>
          <div data-aos="fade-right">
            <h2 className="font-mea text-3.5xl text-center text-dark-brown">
              {familiar.titulo2}
            </h2>
          </div>
          <Separador width="[200px]" />
          <img
            src={familiar.img}
            alt="Padres"
            className="w-[250px] h-[180px]"
            data-aos="zoom-in"
          />
          <p className="font-sofia uppercase text-xl text-dark-brown px-8 text-center mt-2">
            {familiar.nombre1}
            <br /> &<br /> {familiar.nombre2}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Familia;
