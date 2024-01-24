import { esqIzqEspacio, esqDerEspacio } from "../assets/images";
import CardFormato from "../components/CardFormato";
import Separador from "../components/separador";
import { slideData } from "../constants";

const MiHistoria = () => (
  <section>
    <div className="flex flex-col items-center justify-center border-double border-dark-pink border-4 py-10 relative">
      <img src={esqIzqEspacio} className="absolute top-0 left-0 -z-50" />
      <img src={esqDerEspacio} className="absolute bottom-0 right-0 -z-50" />
      <CardFormato titulo1="RECUERDOS" titulo2="Mi Historia" />
      <Separador />
      <separador />
      {slideData.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col justify-center items-center mt-5"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-[400px] h-[400px] mb-10"
              data-aos="zoom-in"
            />
          </div>
        );
      })}
    </div>
  </section>
);

export default MiHistoria;
