"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");

    const supabase = createClient();


    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });


    console.log("LOGIN DATA:", data);
    console.log("LOGIN ERROR:", error);


    if (error) {
      setMessage(error.message);
      return;
    }


    const {
      data: { session },
    } = await supabase.auth.getSession();


    console.log("CURRENT SESSION:", session);


    if (!session) {
      setMessage("Session not created. Please try again.");
      return;
    }


    setMessage("Login successful. Redirecting...");


    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  }


  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Admin Login
        </h1>


        <input
          id="email"
          name="email"
          autoComplete="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-500 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-teal-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <input
          id="password"
          name="password"
          autoComplete="current-password"
          type="password"
          placeholder="Password"
          required
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-500 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-teal-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
        >
          Login
        </button>


        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("successful")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}


        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-teal-600 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>


      </form>

    </main>
  );
}