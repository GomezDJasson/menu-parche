type Props = {
  categories: string[];
  setCategory: (category: string) => void;
};

const CategoryFilter = ({ categories, setCategory }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      
      <button
        onClick={() => setCategory("Todos")}
        className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
        Todos
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="px-5 py-2 rounded-full bg-yellow-300 text-white hover:bg-yellow-400 transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;