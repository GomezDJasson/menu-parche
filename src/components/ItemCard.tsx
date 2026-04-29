import type { MenuItem } from "../types";
import { useCart } from "../context/CartContext";

type Props = {
  item: MenuItem;
};

const ItemCard = ({ item }: Props) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={item.image} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold">{item.name}</h3>

        <p className="text-700 font-bold">
          R${item.price.toLocaleString()}
        </p>

        <button
          onClick={() => addToCart(item)}
          className="mt-3 w-full bg-red-600 text-white py-2 rounded-xl"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCard;