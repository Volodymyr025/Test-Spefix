import { UsersType } from "@/app/page";

interface ListProps {
  data: UsersType[];
  onDelete: (id: number) => void;
}

export const UserList = ({ onDelete, data }: ListProps) => {
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
            onClick={() => onDelete(user.id)}
            className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};
