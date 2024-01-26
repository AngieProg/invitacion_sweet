import { confirmaciones } from "../constants/index";
import CardFormato from "../components/CardFormato";
import CardInfo from "../components/CardInfo";
import Separador from "../components/Separador";
// import { separadorEspacio } from "../assets/images";

const Confirmacion = () => (
  <section className="flex justify-center">
    <div className="flex flex-col justify-center items-center pt-8 pb-3 border-double border-dark-pink border-4  text-center">
      <div>
        <div data-aos="fade-right">
          <h2 className="font-mea text-3.5xl text-center text-dark-brown">
            Confirmación de asistencia
          </h2>
          <h3 className="font-sofia text-base text-center px-5 text-dark-brown">
            Favor de confirmar tu asistencia antes del día 15 de Agosto del 2024
          </h3>
        </div>
      </div>
      {/* <CardFormato titulo1="RSVP" titulo2="Confirma tu Asistencia" /> */}
      <Separador />
      <div className="flex flex-wrap gap-5 justify-center md:px-10 md:gap-9">
        {confirmaciones.map((confirmacion, index) => (
          <div key={index}>
            <CardInfo
              icon={confirmacion.icon}
              titulo1={confirmacion.titulo1}
              titulo2={confirmacion.titulo2}
              btn1={confirmacion.btn1}
              btn2={confirmacion.btn2}
              url1={confirmacion.url1}
              url2={confirmacion.url2}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Confirmacion;
