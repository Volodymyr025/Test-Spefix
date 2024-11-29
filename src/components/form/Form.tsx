"use client";
import React, { useState } from "react";
import { UserList } from "../list/UserList";
import { UsersType } from "@/app/page";
import { Button } from "../button/Button";

export interface UsersProps {
  data: UsersType[];
}

const Form = ({ data }: UsersProps) => {
  const [users, setUsers] = useState<UsersType[]>(data);
  const [newUser, setNewUser] = useState({ id: 0, name: "", email: "" });

  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;
    setUsers([...users, newUser]);
    setNewUser({ id: 0, name: "", email: "" });
  };

  const deleteHandler = (id: number) => {
    const filterUsers = data.filter((user) => user.id !== id);
    setUsers(filterUsers);
  };

  return (
    <>
      <form onSubmit={handleAddUser} className="flex flex-col gap-4 text-black">
        <input
          type="text"
          placeholder="Ім'я"
          value={newUser.name}
          onChange={(e) =>
            setNewUser({
              ...newUser,
              name: e.target.value,
              id: Math.floor(Math.random() * 100),
            })
          }
          className="p-2 border border-gray-500 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="p-2 border border-gray-500 rounded-md"
        />
        <Button type="submit" title="Додати користувача" />
      </form>
      <UserList data={users} onDelete={deleteHandler} />
    </>
  );
};

export default Form;
