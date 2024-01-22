import { confirmaciones } from "../constants/index";
import CardFormato from "../components/CardFormato";
import CardInfo from "../components/CardInfo";
import Separador from "../components/separador";
// import { separadorEspacio } from "../assets/images";

const Confirmacion = () => (
  <section className="flex justify-center">
    <div className="flex flex-col justify-center items-center pt-8 pb-3 border-double border-dark-pink border-4  text-center">
      {/* <img src={separadorEspacio} alt="separador" /> */}
      <CardFormato titulo1="RSVP" titulo2="Confirma tu Asistencia" />
      <Separador />
      <div className="flex flex-wrap gap-10 justify-center">
        {confirmaciones.map((confirmacion, index) => (
          <div key={index}>
            <CardInfo
              icon={confirmacion.icon}
              titulo1={confirmacion.titulo1}
              titulo2={confirmacion.titulo2}
              btn1={confirmacion.btn1}
              btn2={confirmacion.btn2}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Confirmacion;
