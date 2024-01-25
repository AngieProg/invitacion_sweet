import { useEffect } from "react";
import {
  Contador,
  Familia,
  Galeria,
  Invitado,
  Message,
  MiHistoria,
  Ubicaciones,
  Programa,
  //Agradecimiento,
  Hero,
  Confirmacion,
} from "./sections";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <main>
      <Hero />

      {/* <section>
        <Message />
      </section> */}
      <section>
        <Invitado className="padding" />
      </section>
      <section>
        <Ubicaciones />
      </section>
      <section className="padding">
        <Contador />
      </section>
      <section className="padding-x">
        <Familia />
      </section>
      <section className="padding">
        <MiHistoria />
      </section>
      <section className="padding-x">
        <Galeria />
      </section>
      <section>
        <Programa />
      </section>
      <section className="padding">
        <Confirmacion />
      </section>
      {/* <section className="padding-x padding-t pb-8 bg-dark-pink">
      <Agradecimiento />
    </section> */}
    </main>
  );
};

export default App;
