'use server'

import { db } from "@/backend/lib/db";
import { getUserByEmail, getUserById } from "@/backend/data/user";
import { currentUser } from "@/backend/lib/auth";

interface Vehicle {
    plate: string;
    // Add other vehicle properties here
  }

interface PersonalInformationFormProps {
      first: string,
      middle: string,
      last: string,
      phone: string,
      birth: string,
      vehicles: Vehicle[],
      type: string,
    }

export const submit = async (formData: PersonalInformationFormProps) => {

  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

    await db.personalInfo.create({
      data: { // Use 'data' instead of 'formData'
        userId: dbUser.id,
        firstName: formData.first,
        middleName: formData.middle,
        lastName: formData.last,
        phoneNumber: formData.phone,
        birthDay: new Date(formData.birth), // Assuming formData.birth is in a compatible format
        vehicles: {
            create: formData.vehicles.map(vehicle => ({
              plateNum: vehicle.plate,
              // Add other vehicle fields here as needed
            })),
        },
        type: formData.type,
      },
    });
  
    return { success: "Account Setup Complete" };
  };