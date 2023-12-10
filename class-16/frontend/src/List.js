export default function List(props) {
  return (
    <ul>
      {props.list.map((value, index) => (
        <li key={value + index}>
          {value.id} - 
          {value.text} - 
          {value.isCompleted ? "DONE" : "PENDING"}
          <button onClick={() => props.onDelete(index)}>Delete</button>
          <button onClick={() => props.onEdit(index)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}
