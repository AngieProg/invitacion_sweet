const InfoAdicional = ({ icon2, label, input }) => {
  return (
    <div>
      <div className="flex justify-center items-center mb-2 pb-2 ">
        <img
          src={icon2}
          alt="persona"
          className="w-[20px] h-[20px] md:w-[50px] md:h-[50px]"
        />
        <p className="font-sofia text-lg ml-3 text-dark-brown md:text-2xl">
          {label}:{input}
        </p>
      </div>
    </div>
  );
};

export default InfoAdicional;
