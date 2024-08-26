import Home from "@/components/Dashboard/Home";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Radio App Dashboard",
  description: "This is the dashboard of radio app",
};

export default function Dashboard() {
  return (
    <>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </>
  );
}
