const Boton = ({ label, img, url1 }) => {
  const handleClick = () => {
    window.open(url1, "_blank");
  };
  return (
    <button
      className="pink_gradient flex justify-around items-center border-2 border-dark-brown rounded-2xl p-1 mb-3 w-[150px]"
      onClick={handleClick}
    >
      <img src={img} alt="gps" className="w-[20px] h-[20px]" />
      {label}
    </button>
  );
};

export default Boton;
