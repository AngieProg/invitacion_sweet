const InfoAdicional = ({ icon2, label, input }) => {
  return (
    <div>
      <div className="flex justify-center mb-2 pb-2 ">
        <img src={icon2} alt="persona" className="w-[20px] h-[20px]" />
        <p className="font-sofia text-sm ml-3 text-dark-brown">
          {label}:{input}
        </p>
      </div>
    </div>
  );
};

export default InfoAdicional;
