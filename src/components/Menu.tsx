import { useState } from "react";
import { menuItems } from "../data/menu";
import ItemCard from "./ItemCard";
import CategoryFilter from "./CategoryFilter";

const Menu = () => {
  const [category, setCategory] = useState<string>("Todos");

  const categories = [...new Set(menuItems.map(item => item.category))];

  const filteredItems =
    category === "Todos"
      ? menuItems
      : menuItems.filter(item => item.category === category);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      
      {/* Contenedor centrado */}
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Explora nuestro menú
          </h2>
          <p className="text-gray-500 text-sm">
            Pide fácil y rápido desde WhatsApp
          </p>
        </div>

        {/* Filtro */}
        <CategoryFilter
          categories={categories}
          setCategory={setCategory}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Menu;