export default function List(props) {
  return (
    <ul>
      {props.list.map((obj, index) => (
        <li key={obj + index} className="kuch-bhi">
          <a href={"post/" + obj.id}>{obj.title}</a>
        </li>
      ))}
    </ul>
  );
}
