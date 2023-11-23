import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const schools = await prisma.school.findMany();
    return new NextResponse(JSON.stringify(schools, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req,res) => {
  try {
    const body = await req.json();
    const checkUniqueEmail = await prisma.school.findUnique({
        where: {
            email_id:body.email_id,
        }
    });

   
   
    if (checkUniqueEmail) {
      return new NextResponse(
        JSON.stringify({ message: "Email Alreay Used!" }, { status: 400 })
      );
    }
    
    console.log(body);
    const school = await prisma.school.create({ data: body });
    return new NextResponse(JSON.stringify(school, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
