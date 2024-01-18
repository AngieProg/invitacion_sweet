import { portada } from "../assets/images";
import { separadorDorado } from "../assets/icons";

const Hero = () => (
  <div className="flex flex-col items-center justify-center">
    <h1 className="font-montserrat text-3xl mb-3 text-dark-brown mt-6">
      MIS XV AÑOS
    </h1>
    <img src={portada} alt="foto portada" className="w-[330px] h-[470px] " />
    <div>
      {/* <img src={banner} /> */}
      <h1 className="font-mea text-6xl mb-1 text-dark-brown my-5">Valentina</h1>
    </div>

    <img src={separadorDorado} alt="separador" className="" />

    <table className="table-fixed text-xl text-center w-[500px] border-collapse border-spacing-2 border border-soft-brown">
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
