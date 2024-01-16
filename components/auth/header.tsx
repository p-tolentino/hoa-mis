import { FaUserCheck as User } from "react-icons/fa";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <User className="text-8xl" />
      <h1 className="text-3xl font-semibold">User Authentication</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
