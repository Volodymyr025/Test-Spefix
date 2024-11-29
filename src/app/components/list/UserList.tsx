import { UsersProps } from "../form/Form";

export const UserList = ({ data }: UsersProps) => {
  return (
    <ul className="mb-6">
      {data.map((user) => (
        <li
          key={user.id}
          className="flex justify-between items-center py-2 border-b"
        >
          <span>{user.name}</span>
          <span className="text-gray-500">{user.email}</span>
        </li>
      ))}
    </ul>
  );
};
