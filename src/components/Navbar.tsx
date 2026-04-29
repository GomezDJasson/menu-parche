import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";

const Navbar = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Parche y Leña" 
              className="h-25"
            />
            <span className="font-bold text-lg text-gray-800">
              Parche y Leña
            </span>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-yellow-300 text-white px-4 py-2 rounded-xl"
          >
            🛒 {totalItems}
          </button>

        </div>
      </div>

      <CartModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;