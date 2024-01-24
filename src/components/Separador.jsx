import { separador } from "../assets/icons";

const Separador = ({ width }) => (
  <>
    <img
      src={separador}
      alt="Separador"
      className={`h-[20px] mb-5
      ${width ? `w-${width}` : "w-[250px]"}
    `}
    />
  </>
);

export default Separador;
