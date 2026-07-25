"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function Header() {
  const [email, setEmail] = useState("Admin");

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.email) {
        setEmail(user.email);
      }
    }

    getUser();
  }, []);


  return (
    <header className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <h1 className="text-xl font-bold text-gray-900">
        Admin Dashboard
      </h1>


      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
          {email.charAt(0).toUpperCase()}
        </div>


        <span className="text-gray-700">
          {email}
        </span>

      </div>

    </header>
  );
}