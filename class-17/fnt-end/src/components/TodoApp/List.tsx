import { todoTs } from "../../types";
import { PencilIcon, Trash2 } from "lucide-react";

type Props = {
  values: todoTs;
  myKey: number;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
};

export default function List({
  values,
  handleDelete,
  myKey,
  handleEdit,
}: Props) {
  return (
    <tr
      className={`w-full border-2 border-black text-center ${
        values.status === true ? "bg-green-300" : "bg-red-300"
      }`}
    >
      <td>{myKey + 1}</td>
      <td>{values.task}</td>
      <td>{values.status ? "done" : "pending"}</td>
      <td>
        <button
          className="m-1 rounded-full bg-white p-2 duration-200 ease-out hover:bg-gray-700 hover:text-white"
          onClick={() => handleEdit(values._id || "")}
        >
          <PencilIcon />
        </button>
      </td>
      <td>
        <button
          className="m-1 rounded-full bg-white p-2 duration-200 ease-out hover:bg-red-700 hover:text-white"
          onClick={() => handleDelete(values._id || "")}
        >
          <Trash2 />
        </button>
      </td>
    </tr>
  );
}
