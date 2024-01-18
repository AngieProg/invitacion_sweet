//import "aos/dist/aos.css";
//import { circuloRosa } from "../assets/icons";

const Reloj = ({ tiempo, medida }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-center items-center bg-primary rounded-full w-[60px] h-[60px]">
        {/* <img
          src={circuloRosa}
          alt="circulo"
          className="relative bg-cover bg-no-repeat"
        /> */}
        <p className="font-montserrat text-3xl text-dark-brown">{tiempo}</p>
      </div>
      <div>
        <p className="font-sofia text-xl text-dark-brown">{medida}</p>
      </div>
    </div>
  );
};

export default Reloj;
