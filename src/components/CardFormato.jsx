const CardFormato = ({ titulo1, titulo2 }) => {
  return (
    <>
      <h3 className="font-sofia text-2xl text-dark-brown md:text-3xl">
        {titulo1}
      </h3>
      <div data-aos="fade-right">
        <h2 className="font-mea text-4xl text-center text-dark-brown md:text-6xl">
          {titulo2}
        </h2>
      </div>
    </>
  );
};

export default CardFormato;
