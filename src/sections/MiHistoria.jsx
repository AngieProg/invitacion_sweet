import { esqIzqEspacio, esqDerEspacio } from "../assets/images";
import CardFormato from "../components/CardFormato";
import Separador from "../components/Separador";
import { historia } from "../constants";

const MiHistoria = () => (
  <section>
    <div className="flex flex-col items-center justify-center border-double border-dark-pink border-4 py-10 relative">
      <img src={esqIzqEspacio} className="absolute top-0 left-0 -z-10" />
      <img src={esqDerEspacio} className="absolute bottom-0 right-0 -z-10" />
      <CardFormato titulo1="RECUERDOS" titulo2="Mi Historia" />
      <Separador />
      <div className="xl:flex xl:flex-row xl:gap-8 xl:px-8 xl:flex-wrap justify-center items-center">
        {historia.map((item, idx) => {
          return (
            <div key={idx} className="flex justify-center items-center mt-5">
              <img
                src={item.img}
                alt={item.alt}
                className="w-[300px] h-[300px] mb-10 xl:w-[600px] xl:h-[600px]"
                data-aos="zoom-in"
              />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default MiHistoria;
