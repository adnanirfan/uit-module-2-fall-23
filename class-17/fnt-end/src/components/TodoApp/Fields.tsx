import { todoTs } from "../../types";
import { ChangeEvent, FormEvent } from "react";

interface Props {
  getDatahandle: (data: todoTs) => void;
  handleClearAll: () => void;
  updateBtn: boolean;
  userInputs: todoTs;
  setUserInputs: any;
  handleUpdate: () => void;
  handleReset: () => void;
}

export default function Fields({
  getDatahandle,
  handleClearAll,
  updateBtn,
  userInputs,
  setUserInputs,
  handleReset,
  handleUpdate,
}: Props) {
  // handle form submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userInputs?.task) return;
    getDatahandle(userInputs);
    setUserInputs({
      task: "",
      status: false,
    });
  };

  return (
    <form
      className="flex flex-col flex-wrap items-center justify-center gap-4 border-4 border-black p-5"
      onSubmit={handleSubmit}
    >
      <label htmlFor="todoText">
        <input
          className="border-2 border-black p-1 text-center capitalize"
          type="text"
          placeholder="Enter your todo"
          value={userInputs?.task}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setUserInputs((pre: todoTs | null) => {
              if (pre) {
                return { ...pre, task: event.target.value };
              }
              return null;
            });
          }}
        />
      </label>

      <label className="flex flex-col" htmlFor="status">
        Choose a Status
        <select
          className="p-2"
          id="status"
          name="status"
          value={userInputs?.status ? "done" : "pending"}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setUserInputs((pre: todoTs) => {
              if (pre) {
                return {
                  ...pre,
                  status: event.target.value === "done" ? true : false,
                };
              }
              return null;
            });
          }}
        >
          <option value="pending">pending</option>
          <option value="done">done</option>
        </select>
      </label>
      <span>
        {updateBtn ? (
          <button
            className="rounded-lg bg-black p-2 capitalize text-white duration-200 ease-in-out hover:bg-gray-300 hover:text-black"
            type="button"
            onClick={handleUpdate}
          >
            update todo
          </button>
        ) : (
          <span className="space-x-5">
            <button
              className="rounded-lg bg-black p-2 capitalize text-white duration-200 ease-in-out hover:bg-gray-300 hover:text-black"
              type="submit"
            >
              add todo
            </button>
            <button
              className="rounded-lg bg-black p-2 capitalize text-white duration-200 ease-in-out hover:bg-gray-300 hover:text-black"
              type="button"
              onClick={handleReset}
            >
              reset
            </button>
          </span>
        )}
      </span>
      <span className="space-x-5">
        <button
          className="rounded-lg bg-black p-2 capitalize text-white duration-200 ease-in-out hover:bg-gray-300 hover:text-black"
          type="button"
          onClick={handleClearAll}
        >
          clear
        </button>
      </span>
    </form>
  );
}
