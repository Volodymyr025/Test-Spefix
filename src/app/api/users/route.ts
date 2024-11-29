import { NextResponse } from "next/server";

type UsersType = { id: number; name: string; email: string };

export const GET = async (request: Request) => {
  try {
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

    return NextResponse.json(users);
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error to find report", err },
      { status: 500 }
    );
  }
};
