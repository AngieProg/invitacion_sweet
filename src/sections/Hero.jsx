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
        className="absolute bottom-2 right-2 w-[150px] h-[150px] md:w-[300px] md:h-[300px] md:right-[30px] xl:right-[200px] 2xl:right-[380px] "
      />
      <h1
        className="font-montserrat text-3xl mb-3 text-dark-brown md:text-4xl"
        data-aos="fade-left"
      >
        MIS XV AÑOS
      </h1>

      {/* Imagen principal */}
      <img
        src={portada}
        alt="foto portada"
        className="w-[280px] h-[420px] md:w-[310px] md:h-[430px]"
        data-aos="zoom-in"
      />
      {/* Banner */}
      <div className="">
        <div
          className="flex items-center justify-evenly bg-banner bg-cover pl-[50px] w-[280px] h-[50px] mt-4 mb-2 md:w-[350px] md:h-[60px] md:pl-[80px] md:justify-center"
          data-aos="fade-left"
        >
          <h1 className="font-mea text-4xl text-dark-brown md:text-[75px]">
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
          className="w-[90%] md:w-[650px] md:h-[30px]"
          //data-aos="fade-up"
        />
        {/* Datos de la tabla */}
        <table
          className="table-fixed text-sm text-center font-montserrat w-[85%]  border-collapse border-spacing-2 border border-soft-brown md:w-[550px] md:text-xl"
          //data-aos="flip-up"
        >
          <tbody>
            <tr>
              <td
                className="border border-soft-brown text-dark-brown font-semibold px-1 py-3"
                //data-aos="zoom-in"
              >
                CATEDRAL TOLUCA DE LERDO
              </td>
              <td
                className="border border-soft-brown text-dark-brown font-semibold px-1 py-3"
                //data-aos="zoom-in"
              >
                27 DE ABRIL 13:00 HRS
              </td>
              <td
                className="border border-soft-brown text-dark-brown font-semibold px-1 py-3"
                //data-aos="zoom-in"
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
