import Titulo from "../components/Titulo";
import { globos, imgContador } from "./../assets/images";
import Reloj from "./../components/Reloj";
import { useState, useEffect } from "react";

const Contador = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //End of time
  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: "¡Hoy es el gran día!",
  });

  const targetDate = new Date("may 12, 2024 14:00:00");

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = Math.max(
        Number(targetDate) - Number(currentTime),
        0
      );

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (timeDifference === 0) {
        clearInterval(timerInterval);
        setShowEndScreen({ ...showEndScreen, show: true });
        // You can add code here to handle what happens when the target date is reached.
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval); // Cleanup the interval when the component unmounts.
    };
  }, []);

  return (
    <div className="flex flex-col items-center border-dashed border-primary border-4">
      {/* Titulo */}
      <div data-aos="fade-right">
        {showEndScreen.show ? (
          <h3 className="font-mea text-4xl px-14 py-4">
            {showEndScreen.message}
          </h3>
        ) : (
          <Titulo titulo1="¡Solo Faltan!" />
        )}
      </div>

      {/* Imagenes centrales */}
      <div className="flex flex-row-reverse w-[390px] h-[320px] mt-3  mb-5 bg-white">
        <img
          src={imgContador}
          alt="quinceañera"
          className="w-[200px] h-[320px] relative mr-5"
          //data-aos="zoom-in"
        />
        <img
          src={globos}
          alt="globos"
          className="w-[200px] h-[320px] absolute left-[15px] z-10"
          //data-aos="fade-up"
        />
      </div>

      {/* Circulos con tiempo y medidas de tiempo */}
      <div className="flex flex-wrap justify-between items-center w-[300px] mb-3">
        <Reloj tiempo={time.days} medida="Dìas" />

        <Reloj tiempo={time.hours} medida="Horas" />

        <Reloj tiempo={time.minutes} medida="Minutos" />

        <Reloj tiempo={time.seconds} medida="Segundos" />
      </div>
    </div>
  );
};

export default Contador;
