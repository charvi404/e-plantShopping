import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 12, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 15, category: "Indoor" },

  { id: 4, name: "Rose", price: 8, category: "Outdoor" },
  { id: 5, name: "Tulip", price: 9, category: "Outdoor" },
  { id: 6, name: "Sunflower", price: 7, category: "Outdoor" },

  { id: 7, name: "Bonsai", price: 20, category: "Decorative" },
  { id: 8, name: "Cactus", price: 5, category: "Decorative" },
  { id: 9, name: "Orchid", price: 18, category: "Decorative" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div>
      <h2>Plants</h2>

      {["Indoor", "Outdoor", "Decorative"].map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants.filter(p => p.category === category).map(plant => (
            <div key={plant.id}>
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>

              <button
                onClick={() => dispatch(addToCart(plant))}
                disabled={isInCart(plant.id)}
              >
                {isInCart(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;