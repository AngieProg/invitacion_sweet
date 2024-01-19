import { ubicaciones } from "../constants/index";
import CardFormato from "../components/CardFormato";
import CardUbicacion from "../components/CardUbicacion";
import Separador from "../components/separador";

const Ubicacion = () => (
  <section className="flex justify-center">
    <div className="flex flex-col justify-center items-center w-[90%]  bg-white-400  text-center">
      <CardFormato
        titulo1="¿DÓNDE Y CUÁNDO?"
        titulo2="Ubicaciones e Itinerario"
      />
      <Separador />
      <div className="flex flex-wrap gap-10 justify-center">
        {ubicaciones.map((ubicacion, index) => (
          <div
            key={index}
            className="flex flex-col relative items-center justify-center mb-10 "
          >
            <img
              src={ubicacion.img}
              alt={ubicacion.titulo2}
              className="w-[350px] h-[400px] mb-5"
            />
            <CardUbicacion
              icon={ubicacion.icon}
              titulo1={ubicacion.titulo1}
              titulo2={ubicacion.titulo2}
              icon2={ubicacion.icon2}
              hora={ubicacion.hora}
              parrafo={ubicacion.parrafo}
              btn1={ubicacion.btn1}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Ubicacion;
