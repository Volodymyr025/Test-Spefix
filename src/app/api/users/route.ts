import { NextResponse } from "next/server";

const users: UsersType[] = [
  {
    id: 1,
    name: "Ivan",
    email: "ivan@gmail.com",
  },
  {
    id: 2,
    name: "Volodymyr",
    email: "Volodymyr@gmail.com",
  },
  {
    id: 3,
    name: "Ruslan",
    email: "Ruslan@gmail.com",
  },
];

interface UsersType {
  id: number;
  name: string;
  email: string;
}

export const GET = async (request: Request) => {
  try {
    return NextResponse.json(users);
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error to find report", err },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    users.push(data);
    return NextResponse.json(users);
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error to find report", err },
      { status: 500 }
    );
  }
};

export const DELETE = async (request: Request) => {
  try {
    const body = await request.json();
    const index = body.data.findIndex(
      (user: { id: number }) => user.id === body.id
    );
    if (index !== -1) {
      users.splice(index, 1);
    }
    return NextResponse.json(users);
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error to find report", err },
      { status: 500 }
    );
  }
};
