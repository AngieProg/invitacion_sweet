const Boton = ({ label, img }) => (
  <button className="bg-soft-pink flex justify-around items-center border-4 border-dark-pink rounded-2xl p-1 mb-3 w-[150px]">
    <img src={img} alt="gps" className="w-[20px] h-[20px]" />
    {label}
  </button>
);

export default Boton;
