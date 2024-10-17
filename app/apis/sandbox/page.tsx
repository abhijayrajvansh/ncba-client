'use client'

import Sandbox from "@/components/pages/Sandbox";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
    console.log({isAuthenticated})
  }, [isAuthenticated]);

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated) {
    return <Sandbox />;
  }

  redirect('/login')
  return null;
};

export default page;
