const CategoryCard = ({ category }) => {
  const { img, title } = category;
  return (
    <div className="">
      <img src={img} alt="" />
      <div className="relative bottom-16 ">
        <h2 className="text-3xl text-white px-3">{title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
