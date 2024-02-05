import { LogoutButton } from "@/components/auth/logout-button";

const UserDashboard = () => {
  return (
    <div className="flex">
      ((USER))Dashboard
      <LogoutButton>
        <span className="ml-10">Logout</span>
      </LogoutButton>
    </div>
  );
};

export default UserDashboard;
