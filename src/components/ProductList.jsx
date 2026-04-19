import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  // Indoor (6)
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 12, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 15, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Spider Plant", price: 9, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 5, name: "ZZ Plant", price: 18, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Ficus", price: 20, category: "Indoor", img: "https://via.placeholder.com/100" },

  // Outdoor (6)
  { id: 7, name: "Rose", price: 8, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 8, name: "Tulip", price: 9, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 9, name: "Sunflower", price: 7, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 10, name: "Daisy", price: 6, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 11, name: "Lavender", price: 11, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 12, name: "Marigold", price: 5, category: "Outdoor", img: "https://via.placeholder.com/100" },

  // Decorative (6)
  { id: 13, name: "Bonsai", price: 25, category: "Decorative", img: "https://via.placeholder.com/100" },
  { id: 14, name: "Cactus", price: 5, category: "Decorative", img: "https://via.placeholder.com/100" },
  { id: 15, name: "Orchid", price: 18, category: "Decorative", img: "https://via.placeholder.com/100" },
  { id: 16, name: "Succulent", price: 7, category: "Decorative", img: "https://via.placeholder.com/100" },
  { id: 17, name: "Palm", price: 22, category: "Decorative", img: "https://via.placeholder.com/100" },
  { id: 18, name: "Fern", price: 14, category: "Decorative", img: "https://via.placeholder.com/100" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isAdded = (id) => cart.some(item => item.id === id);

  return (
    <div>
      <h2>Plant Shop</h2>

      {["Indoor", "Outdoor", "Decorative"].map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants.filter(p => p.category === category).map(p => (
            <div key={p.id}>
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p>${p.price}</p>

              <button
                onClick={() => dispatch(addItem(p))}
                disabled={isAdded(p.id)}
              >
                {isAdded(p.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
