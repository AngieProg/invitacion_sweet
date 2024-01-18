import { separador } from "../assets/icons";

const Titulo = ({ titulo1 }) => (
  <>
    <div className="flex flex-col items-center pt-6">
      <h1 className="font-mea text-6xl mb-1 text-dark-brown">{titulo1}</h1>
      <img
        src={separador}
        alt="Separador"
        className="w-[300px] h-[20px] mb-5"
      />
    </div>
  </>
);

export default Titulo;
