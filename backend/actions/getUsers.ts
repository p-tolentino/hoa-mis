'use server'

import { db } from "@/backend/lib/db";
import { getAllUser, getAllUserProfile } from "@/backend/data/user";

export const getUsers = async() => {
          const data = await getAllUser();
          return data
}

export const getAllProfile = async() => {
        const data = await getAllUserProfile();
        console.log("data in getting all profile is ", data)
        return data
}
 
