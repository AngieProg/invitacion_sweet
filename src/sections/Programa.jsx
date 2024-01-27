import { programa } from "../constants";
import { separador } from "../assets/icons";

const Programa = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-black py-4 md:py-11">
      <div className="flex flex-col items-center pt-6">
        <h1
          className="font-mea text-4xl mb-1 text-dark-brown md:text-8xl"
          data-aos="fade-right"
        >
          Programa
        </h1>
        <img
          src={separador}
          alt="Separador"
          className="w-[150px] md:w-[300px] md:mb-11 mb-8"
        />
      </div>
      {/* Menu */}
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-20">
        {programa.map((actividad, index) => (
          <div key={index} className="flex md:flex-col items-center md:gap-10">
            {/* Menu Izquierdo */}
            <div className="flex flex-col justify-center items-center">
              <img
                src={actividad.icon}
                alt={actividad.itinerario}
                className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                data-aos="fade-right"
              />
            </div>
            {/* Menu Derecho */}
            <div className="flex flex-col justify-center w-[120px] items-center">
              <div
                className="h-[80px] flex flex-col justify-center items-center"
                data-aos="fade-left"
              >
                <p className="text-xl text-dark-pink text-center md:text-2xl font-montserrat mb-1">
                  {actividad.hora}
                </p>
                <p className="text-xl text-dark-brown text-center md:text-2xl font-sofia">
                  {actividad.itinerario}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Programa;
