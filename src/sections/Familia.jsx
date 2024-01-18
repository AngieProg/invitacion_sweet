import { separador } from "../assets/icons";
import { padres, padrinos } from "../assets/images";

const Familia = () => (
  <div className="flex flex-col items-center justify-center bg-white">
    {/* Padres */}
    <div className="flex flex-col items-center pt-6">
      <h1 className="font-mea text-4xl mb-1 text-dark-brown mt-8">
        Mis Padres
      </h1>
      <img
        src={separador}
        alt="Separador"
        className="w-[200px] h-[20px] mb-5"
      />
    </div>
    <img src={padres} alt="Padres" className="w-[250px] h-[180px]" />
    <p className="font-sofia text-2xl text-dark-brown w-[250px] text-center mt-2">
      María del Carmen MartÍnez Valdez& Horacio Pablo Flore
    </p>

    {/* Padrinos */}
    <div className="flex flex-col items-center pt-6">
      <h1 className="font-mea text-4xl mb-1 text-dark-brown">Mis Padrinos</h1>
      <img
        src={separador}
        alt="Separador"
        className="w-[200px] h-[20px] mb-5"
      />
    </div>
    <img src={padrinos} alt="Padres" className="w-[250px] h-[180px]" />
    <p className="font-sofia text-2xl text-dark-brown text-center w-[300px] mt-2">
      María Guadalupe Martínez Valdez & Rigoberto Baltazar de Santiago
    </p>
    <p className="font-sofia text-xl text-dark-brown mt-2">
      PADRINOS DE VELACIÓN
    </p>
  </div>
);

export default Familia;
