export default function InputBox(props) {
  return (
    <div>
      <input
        placeholder="Add todo"
        onChange={(event) => props.setText(event.target.value)}
        value={props.text}
      />

      {props.editIndex === null ? (
        <button onClick={props.onAdd}>Add</button>
      ) : (
        <button onClick={props.onUpdate}>Update</button>
      )}
    </div>
  );
}
