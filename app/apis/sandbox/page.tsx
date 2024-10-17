'use client'

import Sandbox from "@/components/pages/Sandbox";
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

const page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
    console.log({isAuthenticated})
  }, [isAuthenticated]);

  if (isAuthenticated === null) {
    return <p>Loading...</p>; // Show loading indicator while auth status is being checked
  }

  if (isAuthenticated) {
    return <Sandbox />;
  }

  redirect('/login')
  return null;
};

export default page;
