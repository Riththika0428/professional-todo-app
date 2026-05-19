export default function Header() {
  return (
    <div className="flex justify-between items-center">

      <div>
        <h1 className="text-4xl font-bold">
          Task Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your daily tasks
        </p>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="bg-white px-4 py-3 rounded-2xl outline-none shadow-sm"
      />

    </div>
  );
}