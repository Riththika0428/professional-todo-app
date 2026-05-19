// export default function Header({ darkMode, setDarkMode }) {
//   return (
//     <header
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         marginBottom: "20px",
//       }}
//     >
//       <h1>Professional Todo App</h1>

//       <button onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? "Light Mode" : "Dark Mode"}
//       </button>
//     </header>
//   );
// }

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <h1>Professional Todo App</h1>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}