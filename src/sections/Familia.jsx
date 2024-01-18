import { separador } from "../assets/icons";
import { padres, padrinos } from "../assets/images";
import Titulo from "../components/Titulo";

const Familia = () => (
  <div className="relative flex-1 flex justify-center items-center h-[100vh] bg-family bg-cover bg-center">
    <div className="absolute flex flex-col items-center justify-center w-[75vh] h-[90vh] bg-white">
      <Titulo titulo1="Mis Padres" />
      <img src={padres} alt="Padres" className="w-[350px] h-[220px]" />
      <img
        src={separador}
        alt="Separador"
        className="w-[300px] h-[20px] my-4"
      />

      <Titulo titulo1="Mis Padrinos de Velación" />
      <img src={padrinos} alt="Padres" className="w-[350px] h-[220px]" />
      <img
        src={separador}
        alt="Separador"
        className="w-[300px] h-[20px] my-4"
      />
    </div>
  </div>
);

export default Familia;
