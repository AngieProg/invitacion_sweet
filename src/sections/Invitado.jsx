import { datosInvitado } from "../constants/index";
import CardFormato from "../components/CardFormato";
import InfoAdicional from "../components/InfoAdicional";
import { esqIzqEspacio } from "../assets/images";

const Invitado = () => (
  <section className="flex justify-center md:py-10 md:bg-black my-10 mx-3">
    <div className="flex flex-col justify-center items-center w-[400px] h-[400px] border-4 border-separate border-dark-pink  text-center relative md:w-[500px] md:h-[500px]">
      <img src={esqIzqEspacio} className="absolute top-0 left-0" />
      <CardFormato titulo1="APRECIABLE" titulo2="Nombre del Invitado" />
      <p className="font-montserrat mt-2 text-base w-[300px] text-dark-brown xl:text-xl">
        CON INMENSA ALEGRÍA TE INVITO A CELEBRAR MIS XV AÑOS
      </p>
      <div className="flex flex-col flex-wrap items-center mt-6">
        {datosInvitado.map((dato, index) => (
          <div key={index} className="pt-1">
            <InfoAdicional
              icon2={dato.icon2}
              label={dato.label}
              input={dato.input}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Invitado;
