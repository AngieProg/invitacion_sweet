//import "aos/dist/aos.css";
//import { circuloRosa } from "../assets/icons";

const Reloj = ({ tiempo, medida }) => {
  return (
    <div className="flex flex-col items-center" data-aos="flip-up">
      <div className="flex justify-center items-center pink_gradient rounded-full w-[60px] h-[60px] border-2 border-dark-brown mb-2 md:w-[90px] md:h-[90px]">
        <p className="font-sofia text-3xl text-dark-brown">{tiempo}</p>
      </div>
      <div>
        <p className="font-sofia text-xl text-dark-brown">{medida}</p>
      </div>
    </div>
  );
};

export default Reloj;
