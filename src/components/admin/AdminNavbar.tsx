"use client";

import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/login");
  }

  return (
    <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-teal-700">
        Admin Panel
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </nav>
  );
}