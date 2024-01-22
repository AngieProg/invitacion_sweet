import { padres, padrinos } from "../assets/images";
import Separador from "../components/separador";
import CardFormato from "../components/CardFormato";

const Familia = () => (
  <div className="flex flex-col items-center justify-center border-double border-dark-pink border-4 py-10">
    {/* Padres */}
    <div className="flex flex-col items-center py-8 w-[400px] mb-8 shadow-3xl border-dark-pink border-4">
      <CardFormato titulo1="CON LA BENDICIÓN DE" titulo2="Mis Padres" />
      <Separador />
      <img src={padres} alt="Padres" className="w-[250px] h-[180px]" />
      <p className="font-sofia text-2xl text-dark-brown px-8 text-center mt-2">
        María del Carmen MartÍnez Valdez& Horacio Pablo Flore
      </p>
    </div>

    {/* Padrinos */}
    <div className="flex flex-col items-center py-8 w-[400px] border-dark-pink border-4 mb-8 shadow-3xl">
      <CardFormato titulo1="PADRINOS DE VELACIÓN" titulo2="Mis Padrinos" />
      <Separador />
      <img src={padrinos} alt="Padres" className="w-[250px] h-[180px]" />
      <p className="font-sofia text-2xl text-dark-brown px-8 text-center mt-2">
        María Guadalupe Martínez Valdez & Rigoberto Baltazar de Santiago
      </p>
    </div>
    {/* <div className="flex flex-col items-center pt-6">
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
    </p> */}
  </div>
);

export default Familia;
