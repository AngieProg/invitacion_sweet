import { familia } from "../assets/images";

const Agradecimiento = () => {
  return (
    <div className="bg-sabana bg-cover ">
      <p className="text-sofia p-5 text-justify">
        Agradecemos su apreciable tiempo para acompañarnos en este día tan
        especial para la familia Pablo Martínez y poder compartir este día tan
        especial para nuestra hija Karla Valentina.
      </p>
      <img
        src={familia}
        alt="familia"
        className="w-[320px] h-[320px] md:w-[500px] md:h-[500px]"
      />
    </div>
  );
};

export default Agradecimiento;
