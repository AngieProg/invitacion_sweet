import { slideData } from "./../constants/index";
import { flechaIzq, flechaDer } from "../assets/icons";
import { useState } from "react";
import CardFormato from "../components/CardFormato";
import { separador } from "../assets/icons";

const Galeria = () => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === slideData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slideData.length - 1 : slide - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <CardFormato titulo1="SESIÓN DE FOTOS" titulo2="Galería" />
      <img
        src={separador}
        alt="Separador"
        className="w-[150px] md:w-[300px] md:mb-11 mb-5"
      />
      <div className="flex justify-center">
        <div className="flex justify-center w-[100%] h-[600px] relative items-center md:w-[600px] md:h-[750px]">
          <img
            src={flechaIzq}
            alt="flecha izquierda"
            className="absolute w-[30px] h-[30px] left-[20px] cursor-pointer md:w-[35px] md:h-[35px] "
            onClick={prevSlide}
          />
          {slideData.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item.img}
                alt={item.alt}
                className={
                  slide === idx
                    ? "border-2 border-dark-pink rounded-lg object-cover w-full h-[600px] md:w-[600px] md:h-[750px]"
                    : "hidden"
                }
              />
            );
          })}
          <img
            src={flechaDer}
            alt="flecha derecha"
            className="absolute w-[30px] h-[30px] right-[20px] cursor-pointer md:w-[35px] md:h-[35px]"
            onClick={nextSlide}
          />
          <span className="flex absolute bottom-[20px]">
            {slideData.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={
                    slide === idx
                      ? "bg-dark-pink w-[8px] h-[8px] rounded-full border-none outline-none mx-2 cursor-pointer"
                      : "w-[8px] h-[8px] rounded-full border-none outline-none mx-2 cursor-pointer bg-black"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      </div>
      <img
        src={separador}
        alt="Separador"
        className="w-[150px] mt-4 md:mt-10 md:w-[300px] md:mb-11"
      />
    </div>
  );
};

export default Galeria;
