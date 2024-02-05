"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/backend/lib/db";
import { RegisterSchema } from "@/backend/schemas";
import { getUserByEmail } from "@/backend/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return { success: "Account successfully registered!" };
};
