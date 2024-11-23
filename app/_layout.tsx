import { Routes } from "@/routes";
import { AuthProvider } from '../context/AuthContext'

export default function RootLayout() {
  return (
    <AuthProvider>
    <Routes/>
    </AuthProvider>
  );
}