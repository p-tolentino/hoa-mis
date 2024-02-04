"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/backend/lib/db";
import { RegisterSchema } from "@/backend/schemas";
import { getUserByEmail } from "@/backend/data/user";
import { sendVerificationEmail } from "@/backend/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Account successfully registered!" };
};
