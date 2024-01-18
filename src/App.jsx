import {
  Contador,
  Familia,
  Galeria,
  Invitado,
  Message,
  MiHistoria,
  Ubicaciones,
  Agradecimiento,
  Hero,
  Confirmacion,
} from "./sections";

const App = () => (
  <main className="relative">
    <section className="bg-dark-pink xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section>
      <Message />
    </section>
    <section className="padding">
      <Invitado />
    </section>
    <section className="padding">
      <Contador />
    </section>
    <section>
      <Familia />
    </section>
    <section className="bg-soft-pink padding-x py-10">
      <MiHistoria />
    </section>
    <section className="bg-dark-pink padding-x sm:py-32 py-16 w-full">
      <Ubicaciones />
    </section>
    <section className="padding">
      <Galeria />
    </section>
    <section className="padding">
      <Confirmacion />
    </section>
    <section className="padding-x padding-t pb-8 bg-dark-pink">
      <Agradecimiento />
    </section>
  </main>
);

export default App;
