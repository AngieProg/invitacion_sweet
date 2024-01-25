import { ubicaciones } from "../constants/index";
import CardFormato from "../components/CardFormato";
import CardUbicacion from "../components/CardUbicacion";
import Separador from "../components/Separador";

const Ubicacion = () => (
  <section className="flex justify-center mt-10">
    <div className="flex flex-col justify-center items-center bg-white-400 text-center">
      <CardFormato
        titulo1="¿DÓNDE Y CUÁNDO?"
        titulo2="Ubicaciones e Itinerario"
      />
      <Separador />

      <div className="flex flex-col lg:flex-row lg:gap-8 lg:px-3 justify-center">
        {ubicaciones.map((ubicacion, index) => (
          <div key={index} className="mb-[200px] relative flex justify-center">
            <img
              src={ubicacion.img}
              alt={ubicacion.titulo2}
              className="w-[100%] h-[400px]"
            />
            <div className="absolute -bottom-[150px] border-dark-pink border-4">
              <CardUbicacion
                icon={ubicacion.icon}
                titulo1={ubicacion.titulo1}
                titulo2={ubicacion.titulo2}
                icon2={ubicacion.icon2}
                hora={ubicacion.hora}
                parrafo={ubicacion.parrafo}
                btn1={ubicacion.btn1}
                url1={ubicacion.url1}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Ubicacion;
