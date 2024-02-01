import { familia, esqIzqEspacio, esqDerEspacio } from "../assets/images";

const Agradecimiento = () => (
  <section className="flex justify-center items-center w-full h-[100vh] text-center relative md:w-[500px] md:h-[500px] flex-col md:py-10 md:bg-black my-10">
    <img src={esqIzqEspacio} className="absolute top-0 left-0 -z-10" />
    <div className="flex flex-col items-center my-[100px]">
      <p className="text-montserrat text-justify text-lg uppercase px-8">
        La familia Pablo Martínez agradece su apreciable tiempo para
        acompañarnos en este evento tan maravilloso para nosotros y poder
        compartir este día tan especial para nuestra hija Karla Valentina.
      </p>
      <img
        src={familia}
        alt="familia"
        className="w-[350px] h-[350px] md:w-[500px] md:h-[500px]"
      />
    </div>
    <img src={esqDerEspacio} className="absolute bottom-0 right-0" />
  </section>
);

export default Agradecimiento;
