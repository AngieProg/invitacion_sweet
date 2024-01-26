import { esqDerDorada, esqIzqDorada, portada } from "../assets/images";
import { separadorDorado } from "../assets/icons";
//import Song from "../components/Song";
//import Sobre from "./Sobre";

const Hero = () => {
  return (
    <section className="pink_gradient relative flex flex-col h-[100%] items-center">
      {/* Boton play/pausa de música */}
      {/* <div className="fixed items-end cursor-pointer right-[40px] bottom-[140px]">
        <Sobre />
      </div> */}

      {/* Separador esquina izquierda */}
      <img
        src={esqIzqDorada}
        alt="separador"
        className="absolute top-2 left-2 w-[150px] h-[150px]"
      />
      {/* Separador esquina derecha */}
      <img
        src={esqDerDorada}
        alt="separador"
        className="absolute bottom-0 right-0 w-[150px] h-[150px]"
      />
      <h1
        className="font-montserrat text-3xl mb-3 text-dark-brown mt-6"
        data-aos="fade-left"
      >
        MIS XV AÑOS
      </h1>

      {/* Imagen principal */}
      <img
        src={portada}
        alt="foto portada"
        className="w-[240px] h-[340px]"
        //data-aos="zoom-in"
      />
      {/* Banner */}
      <div
        className="flex items-center justify-evenly bg-banner bg-cover w-[350px] h-[50px] my-4 self-end"
        //data-aos="fade-left"
      >
        <h1 className="font-mea text-4xl pb-2 pt-3 text-dark-brown">
          Valentina
        </h1>
      </div>

      {/* Tabla */}
      <div className="flex flex-col justify-center items-center">
        {/* Adorno superior de la tabla */}
        <img src={separadorDorado} alt="separador" className="w-[90%]" />

        {/* Datos de la tabla */}
        <table className="table-fixed text-sm text-center font-montserrat w-[85%] border-collapse border-spacing-2 border border-soft-brown">
          <tbody>
            <tr>
              <td className="border border-soft-brown text-dark-brown px-3 py-3">
                CATEDRAL TOLUCA DE LERDO
              </td>
              <td className="border border-soft-brown text-dark-brown px-3 py-3">
                27 DE ABRIL 2024 13:00
              </td>
              <td className="border border-soft-brown text-dark-brown px-3 py-3">
                SALÓN DALIAS PARIS
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Hero;
