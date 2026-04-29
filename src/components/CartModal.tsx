import { useCart } from "../context/CartContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CartModal = ({ isOpen, onClose }: Props) => {
  const { cart, increase, decrease, remove } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleWhatsApp = () => {
    const phone = "559285185822";

    const message = cart
      .map(
        item =>
          `${item.name} x${item.quantity} - $${item.price * item.quantity}`
      )
      .join("\n");

    const finalMessage = `Hola, quiero pedir:\n\n${message}\n\nTotal: $R${total}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Fondo oscuro */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-5 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Barra de arrastre */}
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

        <h2 className="text-xl font-bold mb-4 text-center">
          Tu pedido
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            El carrito está vacío
          </p>
        ) : (
          <>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {cart.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      R${item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrease(item.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increase(item.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => remove(item.id)}
                      className="text-red-500"
                    >
                      🗑
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 font-bold text-lg text-center">
              Total: R${total.toLocaleString()}
            </div>

            <button
              onClick={handleWhatsApp}
              className="mt-4 w-full bg-green-500 text-white py-3 rounded-xl font-semibold"
            >
              Enviar pedido por WhatsApp
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;