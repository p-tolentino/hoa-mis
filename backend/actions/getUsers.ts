'use server'
import { db } from "@/backend/lib/db";
import { getAllUser, getAllUserProfile } from "@/backend/data/user";
import { currentUser } from "@/backend/lib/auth";


export const getUsers = async() => {
          const data = await getAllUser();
          return data
}

export const getAllProfile = async() => {
        const data = await getAllUserProfile();
        console.log("data in getting all profile is ", data)
        return data
}

export const getUserById = async (id: string) => {
          const user = await db.user.findUnique({
            where: { id },
          });
          return user;
      };
      
      export const getUserProfileById = async (userId: string) => {
          const user = await db.personalInfo.findUnique({
            where: { userId },
          });
          return user;
      };

export const getMyUserId = async() => {
        const user = await currentUser();
        if (!user) {
          return "Unauthorized";
        }
        return user.id
}
 
