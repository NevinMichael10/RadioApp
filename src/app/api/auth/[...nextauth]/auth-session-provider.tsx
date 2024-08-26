"use client"
import { SessionProvider } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

function AuthSessionProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  
  return (
  <SessionProvider>
  {loading ? <Loader /> : children}
  </SessionProvider>
  )
} 

export default AuthSessionProvider;
