import Boton from "./Boton";
import { confirmacion } from "../assets/icons";

const CardInfo = ({
  icon,
  titulo1,
  titulo2,
  icon2,
  hora,
  parrafo,
  btn1,
  btn2,
  url1,
  url2,
}) => (
  <div className="flex flex-col justify-center items-center px-8 py-8 mb-5 w-[300px] shadow-3xl">
    <img
      src={icon}
      alt={titulo1}
      className="w-[50px] h-[50px]"
      data-aos="zoom-out-up"
    />
    {titulo1 && <h3 className="font-sofia text-base py-2">{titulo1}</h3>}
    <h2 className="font-mea text-2xl py-3">{titulo2}</h2>
    {hora && (
      <div className="flex p-2 items-center ">
        <img src={icon2} alt="hora" className="w-[17px] h-[17px]" />
        <p className="font-montserrat text-sm ml-2">{hora} HRS</p>
      </div>
    )}
    {parrafo && (
      <p className="font-montserrat text-slate-gray text-sm mb-4">{parrafo}</p>
    )}
    <div data-aos="flip-up">
      {btn1 && <Boton label={btn1} img={confirmacion} url1={url1} />}
    </div>
    <div data-aos="flip-down">
      {btn2 && <Boton label={btn2} img={confirmacion} url2={url2} />}
    </div>
  </div>
);

export default CardInfo;
