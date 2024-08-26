import SignIn from "@/components/SignIn/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Radio App Sign In",
  description: "This is the Sign in page of radio app",
};

export default function SignInPage() {
  return (
    <>
      <SignIn />
    </>
  );
}
