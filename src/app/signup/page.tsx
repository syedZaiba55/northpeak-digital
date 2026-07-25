"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("Signup response:", data);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Signup successful!");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Create Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-500 p-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-500 p-3 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-teal-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>

        {message && (
          <p className="mt-4 text-center text-teal-600">
            {message}
          </p>
        )}
      </form>
    </main>
  );
}