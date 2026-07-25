"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { createClient } from "@/lib/supabase";

export default function Sidebar() {

  async function handleLogout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    window.location.href = "/login";
  }


  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-6">

      <h2 className="text-2xl font-bold text-teal-600 mb-8">
        Admin Panel
      </h2>


      <nav className="space-y-4">

        <Link
          href="/admin"
          className="flex items-center gap-3 text-gray-700 hover:text-teal-600"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>


        <Link
          href="/admin/users"
          className="flex items-center gap-3 text-gray-700 hover:text-teal-600"
        >
          <Users size={20} />
          Users
        </Link>


        <Link
          href="/admin/leads"
          className="flex items-center gap-3 text-gray-700 hover:text-teal-600"
        >
          <FileText size={20} />
          Leads
        </Link>


        <Link
          href="/admin/settings"
          className="flex items-center gap-3 text-gray-700 hover:text-teal-600"
        >
          <Settings size={20} />
          Settings
        </Link>

      </nav>


      <button
        onClick={handleLogout}
        className="flex items-center gap-3 text-red-600 mt-10 hover:text-red-700"
      >
        <LogOut size={20} />
        Logout
      </button>


    </aside>
  );
}