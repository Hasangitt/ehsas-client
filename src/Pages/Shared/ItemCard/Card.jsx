import PropTypes from "prop-types";

const Card = ({ item }) => {
  const { name, image, price, category, productDetails } = item;

  return (
    <div className="mx-auto flex justify-center">
  <div className="card bg-base-100 w-96 shadow-xl flex-grow">
    <figure>
      <img className="h-[400px] w-full" src={image} alt="Shoes" />
    </figure>
    <div className="card-body flex flex-col">
      <h2 className="card-title flex-grow">
        {name}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>{productDetails}</p>
      <div className="card-actions justify-between items-center">
      <button className="border px-4 bg-sky-400 hover:bg-sky-600 text-white font-semibold rounded-full">Add to cart</button>
        <div className="badge badge-outline">{price}</div>
        <div className="badge badge-outline">{category}</div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Card;

Card.propTypes = {
  item: PropTypes.node,

}