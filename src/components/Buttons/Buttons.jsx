export default function Buttons({ value, onUpdate }) {
  return <button onClick={onUpdate}>Click me {value}</button>;
}
