import { esqDerDorada, esqIzqDorada, portada } from "../assets/images";
import { separadorDorado } from "../assets/icons";

const Hero = () => (
  <div className="relative flex flex-col items-center justify-center">
    <img
      src={esqIzqDorada}
      alt="separador"
      className="absolute top-0 left-0 w-[200px] h-[200px]"
    />
    <img
      src={esqDerDorada}
      alt="separador"
      className="absolute -bottom-10 right-0 w-[200px] h-[200px]"
    />
    <h1 className="font-montserrat text-3xl mb-3 text-dark-brown mt-6">
      MIS XV AÑOS
    </h1>
    <img src={portada} alt="foto portada" className="w-[300px] h-[440px] " />

    <div className="flex items-center justify-evenly bg-banner bg-cover w-[400px] h-[60px] my-4">
      <div className="w-[10] h-[10]" />
      <h1 className="font-mea text-6xl mb-1 text-dark-brown my-5">Valentina</h1>
    </div>

    <img src={separadorDorado} alt="separador" className="" />

    <table className="table-fixed text-xl text-center text-montserrat w-[500px] border-collapse border-spacing-2 border border-soft-brown">
      <tbody>
        <tr>
          <td className="border border-soft-brown text-dark-brown px-3 py-3">
            CAPILLA SAN MARTIN
          </td>
          <td className="border border-soft-brown text-dark-brown px-3 py-3">
            21 DE ABRIL 2024
          </td>
          <td className="border border-soft-brown text-dark-brown px-3 py-3">
            SALON RUIZ SOLARES
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Hero;
