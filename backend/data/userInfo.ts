import { db } from "@/backend/lib/db";

export const getInfoById = async (id: string) => {
  try {
    const user = await db.personalInfo.findUnique({
      where: { userId: id },
    });

    return user;
  } catch {
    return null;
  }
};
