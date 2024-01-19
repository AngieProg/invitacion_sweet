import { confirmaciones } from "../constants/index";
import CardFormato from "../components/CardFormato";
import CardInfo from "../components/CardInfo";

const Confirmacion = () => (
  <section className="mt-10 flex justify-center">
    <div className="flex flex-col justify-center items-center w-[90%] py-6 bg-white-400  text-center">
      <CardFormato titulo1="RSVP" titulo2="Confirma tu Asistencia" />
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
