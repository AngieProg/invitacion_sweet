import { Parallax } from "react-parallax";
import { photoBackground } from "../assets/images";

const Message = () => (
  <Parallax
    bgImage={photoBackground}
    strength={800}
    className="relative h-[100vh]"
  >
    <div
      className="flex items-center justify-center absolute h-[100vh] w-[100%]"
      data-aos="zoom-in"
    >
      <p className="bg-soft-pink opacity-65 font-sofia uppercase text-2xl py-5 px-8 text-justify md:text-4xl md:px-[100px] md:py-10">
        Se acerca un día muy especial en mi vida y quiero compartirlo con todos
        ustedes. ¡Estoy emocionada de invitarte a mi fiesta de XV años! Espero
        que puedas unirte a mí en este día tan importante.
      </p>
    </div>
  </Parallax>
);

export default Message;
