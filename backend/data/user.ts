import { db } from "@/backend/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });

    return user;
  } catch {
    return null;
  }
};

export const getAllUser = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error; // Re-throw the error after logging or handle it as needed
  }
};

export const getAllUserProfile = async () => {
  try {
    const users = await db.personalInfo.findMany();
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error; // Re-throw the error after logging or handle it as needed
  }
};