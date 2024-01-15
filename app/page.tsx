import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { RxAvatar as User, RxArrowRight as RightArrow } from "react-icons/rx";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="flex gap-4 text-6xl font-semibold text-white drop-shadow-md">
          <User />
          Authentication
        </h1>
        <p className="text-white text-lg">Only verified users may proceed</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg" className="gap-2">
              Sign In <RightArrow />
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
