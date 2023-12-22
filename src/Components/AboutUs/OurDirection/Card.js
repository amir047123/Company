const Card = ({ name, des, icon }) => {
  return (
    <div className="max-w-xs lg:pr-5">
      <img className="w-10" src={icon} alt="respect svg" />
      <h2 className="font-medium my-5 text-[17px]">{name}</h2>
      <p className="text-start text-sm opacity-50">{des}</p>
    </div>
  );
};

export default Card;
