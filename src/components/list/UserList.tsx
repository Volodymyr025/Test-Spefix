import { UsersType } from "@/app/page";
import { UsersProps } from "../form/Form";

interface ListProps {
  data: UsersType[];
  setUsers: React.Dispatch<React.SetStateAction<UsersType[]>>;
}

export const UserList = ({ data, setUsers }: ListProps) => {
  const deleteHandler = (id: number) => {
    const filterUsers = data.filter((user) => user.id !== id);
    setUsers(filterUsers);
  };
  return (
    <ul className="mb-6">
      {data.map((user) => (
        <li
          key={user.id}
          className="flex justify-between items-center py-2 border-b text-black"
        >
          <span>{user.name}</span>
          <span className="truncate">{user.email}</span>
          <button
            onClick={() => deleteHandler(user.id)}
            className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};
