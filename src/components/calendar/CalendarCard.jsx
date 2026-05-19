export default function CalendarCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-2xl font-bold mb-6">
        April 2026
      </h2>

      <div className="grid grid-cols-7 gap-3 text-center">

        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`p-2 rounded-xl cursor-pointer
            ${i === 9
              ? "bg-pink-500 text-white"
              : "hover:bg-pink-100"}
            `}
          >
            {i + 1}
          </div>
        ))}

      </div>

    </div>
  );
}