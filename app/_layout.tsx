import { Routes } from "@/routes";
import { AuthProvider } from '../context/AuthContext'
import React from "react";
import { useEffect } from "react";
import { setupInterceptors } from "@/services/api";

export default function RootLayout() {

  useEffect(() => {
    setupInterceptors();
  }, [])

  return (
    <AuthProvider>
    <Routes/>
    </AuthProvider>
  );
}