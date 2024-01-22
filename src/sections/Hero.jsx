import { esqDerDorada, esqIzqDorada, portada } from "../assets/images";
import { separadorDorado } from "../assets/icons";
import Song from "../components/Song";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Boton play/pausa de música */}
      <div className="fixed items-end cursor-pointer right-[40px] bottom-[140px]">
        <Song />
      </div>

      {/* Separador esquina izquierda */}
      <img
        src={esqIzqDorada}
        alt="separador"
        className="absolute top-0 left-0 w-[200px] h-[200px]"
      />
      {/* Separador esquina derecha */}
      <img
        src={esqDerDorada}
        alt="separador"
        className="absolute -bottom-10 right-0 w-[200px] h-[200px]"
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
        className="w-[300px] h-[440px]"
        data-aos="zoom-in"
      />

      <div
        className="flex items-center justify-evenly bg-banner bg-cover w-[400px] h-[60px] my-4"
        data-aos="fade-left"
      >
        <div className="w-[10] h-[10]" />
        <h1 className="font-mea text-6xl mb-1 text-dark-brown my-5">
          Valentina
        </h1>
      </div>

      {/* Adorno superior de la tabla */}
      <img src={separadorDorado} alt="separador" />

      {/* Datos de la tabla */}
      <table className="table-fixed text-xl text-center font-montserrat w-[500px] border-collapse border-spacing-2 border border-soft-brown">
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
  );
};

export default Hero;
