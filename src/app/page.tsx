import Form from "../components/form/Form";

export interface UsersType {
  id: number;
  name: string;
  email: string;
}

const getUsers = async (): Promise<UsersType[]> => {
  try {
    const res = await fetch("http://localhost:3000/api/users");
    const users = await res.json();
    return users;
  } catch (err: any) {
    throw new Error(err);
  }
};

const Home = async () => {
  const users: UsersType[] = await getUsers();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md border border-gray-300">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          Список користувачів
        </h1>
        <Form data={users} />
      </div>
    </div>
  );
};

export default Home;
