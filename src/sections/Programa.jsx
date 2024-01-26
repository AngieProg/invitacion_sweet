import Titulo from "../components/Titulo";
import Separador from "../components/Separador";
import { programa } from "../constants";

const Programa = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-black py-4">
      <Titulo titulo1="Programa" />
      <Separador width="[200px]" />
      {/* Menu */}
      <div className="flex flex-col items-center gap-5">
        {programa.map((actividad, index) => (
          <div key={index} className="flex items-center">
            {/* Menu Izquierdo */}
            <div className="flex flex-col justify-center items-center">
              <img
                src={actividad.icon}
                alt={actividad.itinerario}
                className="w-[70px] h-[70px]"
                data-aos="fade-right"
              />
            </div>
            {/* Menu Derecho */}
            <div className="flex flex-col justify-center w-[120px] items-center">
              <div
                className="h-[80px] flex flex-col justify-center items-center"
                data-aos="fade-left"
              >
                <p className="text-xl text-dark-pink text-center font-montserrat mb-1">
                  {actividad.hora}
                </p>
                <p className="text-xl text-dark-brown text-center font-sofia">
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
