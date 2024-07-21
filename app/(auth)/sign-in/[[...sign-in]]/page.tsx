import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="flex flex-row justify-center h-screen items-center">
        <SignIn />;
    </div>
  ) 
}