import { FaPlus } from "react-icons/fa";

export default function FloatingButton() {
  return (
    <button
      className="fixed bottom-8 right-8
      w-16 h-16 rounded-full
      bg-pink-500 text-white
      text-xl shadow-xl
      hover:scale-110 transition"
    >
      <FaPlus />
    </button>
  );
}