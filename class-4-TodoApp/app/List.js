export default function List(props) {
  return (
    <ul>
      <li>Todo 1</li>

      {props.list.map((value, index) => (
        <li key={value + index}>{value}</li>
      ))}
    </ul>
  );
}
