import { esqDerDorada, esqIzqDorada, portada } from "../assets/images";
import { separadorDorado } from "../assets/icons";
//import Song from "../components/Song";
import Sobre from "./Sobre";

const Hero = () => {
  return (
    <section className="pink_gradient relative flex flex-col justify-center h-[100vh] items-center">
      {/* Boton play/pausa de música */}
      <div className="fixed items-end cursor-pointer right-[40px] bottom-[140px]">
        <Sobre />
      </div>

      {/* Separador esquina izquierda */}
      <img
        src={esqIzqDorada}
        alt="separador"
        className="absolute top-2 left-2 w-[150px] h-[150px] md:w-[300px] md:h-[300px] md:left-[50px] xl:left-[200px] 2xl:left-[400px]"
      />
      {/* Separador esquina derecha */}
      <img
        src={esqDerDorada}
        alt="separador"
        className="absolute bottom-0 right-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] md:right-[30px] xl:right-[200px] 2xl:right-[380px] "
      />
      <h1
        className="font-montserrat text-3xl mb-3 text-dark-brown mt-6 md:text-4xl"
        data-aos="fade-left"
      >
        MIS XV AÑOS
      </h1>

      {/* Imagen principal */}
      <img
        src={portada}
        alt="foto portada"
        className="w-[240px] h-[340px]"
        data-aos="zoom-in"
      />
      {/* Banner */}
      <div>
        <div
          className="flex items-center justify-evenly bg-banner bg-cover w-[350px] h-[50px] my-4 self-end md:w-[500px] md:h-[90px]"
          data-aos="fade-left"
        >
          <h1 className="font-mea text-4xl pb-2 pt-3 text-dark-brown md:text-8xl">
            Valentina
          </h1>
        </div>
      </div>

      {/* Tabla */}
      <div className="flex flex-col justify-center items-center">
        {/* Adorno superior de la tabla */}
        <img
          src={separadorDorado}
          alt="separador"
          className="w-[90%] md:w-[750px]"
          data-aos="fade-up"
        />

        {/* Datos de la tabla */}
        <table
          className="table-fixed text-sm text-center font-montserrat w-[85%]  border-collapse border-spacing-2 border border-soft-brown md:w-[700px] md:text-2xl"
          data-aos="flip-up"
        >
          <tbody>
            <tr>
              <td
                className="border border-soft-brown text-dark-brown px-3 py-3"
                data-aos="zoom-in"
              >
                CATEDRAL TOLUCA DE LERDO
              </td>
              <td
                className="border border-soft-brown text-dark-brown px-3 py-3"
                data-aos="zoom-in"
              >
                27 DE ABRIL 2024 13:00
              </td>
              <td
                className="border border-soft-brown text-dark-brown px-3 py-3"
                data-aos="zoom-in"
              >
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
