import { recepcion, iglesia, llamada } from "../assets/icons";
import Titulo from "../components/Titulo";
import Separador from "../components/separador";

const Programa = () => {
  const Imagen = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="w-[80px] h-[80px]"
      data-aos="fade-right"
    />
  );

  const Datos = ({ hora, itinerario }) => (
    <div
      className="h-[80px] flex flex-col justify-center items-center"
      data-aos="fade-left"
    >
      <p className="text-xl font-montserrat mb-3">{hora}</p>
      <p className="text-xl font-sofia">{itinerario}</p>
    </div>
  );

  return (
    <section className="flex flex-col justify-center items-center">
      <Titulo titulo1="Programa" />
      <Separador width="[200px]" />
      {/* Menu */}
      <div className="flex gap-[50px]">
        {/* Menu Izquierdo */}
        <div className="flex flex-col justify-center items-center gap-10">
          <Imagen src={recepcion} alt="recepcion" />
          <Imagen src={iglesia} alt="comida" />
          <Imagen src={llamada} alt="vals" />
        </div>
        {/* Menu Derecho */}
        <div className="flex flex-col justify-center items-center gap-10">
          <Datos hora="15:30" itinerario="RECEPCIÓN" />
          <Datos hora="16:00" itinerario="COMIDA" />
          <Datos hora="17:00" itinerario="VALS" />
        </div>
      </div>
    </section>
  );
};
export default Programa;
