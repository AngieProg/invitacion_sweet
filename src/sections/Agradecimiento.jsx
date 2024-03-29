import { familia, esqIzqEspacio, esqDerEspacio } from "../assets/images";

const Agradecimiento = () => (
  <section className="flex justify-center items-center w-full h-[100vh] text-center relative md:w-[750px] md:h-[750px] flex-col md:py-10 my-10">
    <img
      src={esqIzqEspacio}
      className="absolute top-0 left-0 -z-10 md:w-[500px] md:h-[500px]"
    />
    <div className="flex flex-col items-center md:py-10">
      <p className="text-montserrat text-justify text-lg uppercase px-8 md:text-2xl md:px-[100px]">
        La familia Pablo Martínez agradece su apreciable tiempo para
        acompañarnos en este evento tan maravilloso para nosotros y poder
        compartir este día tan especial para nuestra hija Karla Valentina.
      </p>
      <img
        src={familia}
        alt="familia"
        className="w-[350px] h-[350px] md:w-[500px] md:h-[500px]"
        data-aos="zoom-in"
      />
    </div>
    <img
      src={esqDerEspacio}
      className="absolute bottom-0 right-0 md:w-[500px] md:h-[500px]"
    />
  </section>
);

export default Agradecimiento;
