import { db } from "@/backend/lib/db";

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
    await db.personalInfo.create({
      data: { // Use 'data' instead of 'formData'
        firstName: formData.first,
        middleName: formData.middle,
        lastName: formData.last,
        phoneNumber: formData.phone,
        birthDay: new Date(formData.birth), // Assuming formData.birth is in a compatible format
        vehicles: {
            create: formData.vehicles.map(vehicle => ({
              plate: vehicle.plate,
              // Add other vehicle fields here as needed
            })),
        },
        type: formData.type,
      },
    });
  
    return { success: "Account successfully registered!" };
  };