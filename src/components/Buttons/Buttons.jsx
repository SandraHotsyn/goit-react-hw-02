export default function Buttons() {
  const handleClick = (value) => {
    console.log("Cliiiick", value);
  };

  const handleMouseEnter = (event) => {
    console.log("handleMouseEnter", event);
  };

  return (
    <div>
      <h1 onMouseEnter={handleMouseEnter}> state React </h1>
      <button onClick={() => handleClick(5)}>Click me</button>
    </div>
  );
}
