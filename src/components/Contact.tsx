"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSuccess("");
    setError("");


    if (
      !form.name ||
      !form.email ||
      !form.budget ||
      !form.message
    ) {
      setError("Please fill all fields.");
      return;
    }


    setLoading(true);


    const supabase = createClient();


    const { error } = await supabase
      .from("leads")
      .insert([
        {
          name: form.name,
          email: form.email,
          budget: form.budget,
          message: form.message,
          status: "New",
        },
      ]);


    if (error) {
      console.log(error);

      setError(
        "Something went wrong. Please try again."
      );

      setLoading(false);
      return;
    }


    setSuccess(
      "✅ Thank you! Your request has been submitted successfully."
    );


    setForm({
      name: "",
      email: "",
      budget: "",
      message: "",
    });


    setLoading(false);
  };


  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-900 dark:bg-slate-950 text-white transition"
    >
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Start Your Project
        </h2>


        <p className="text-center text-slate-300 mb-10">
          Tell us about your project and our team will contact you.
        </p>


        {success && (
          <div className="mb-6 rounded-xl bg-emerald-600 p-4 text-center">
            {success}
          </div>
        )}


        {error && (
          <div className="mb-6 rounded-xl bg-red-600 p-4 text-center">
            {error}
          </div>
        )}


        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-5 py-4 outline-none focus:ring-2 focus:ring-emerald-500"
          />


          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-5 py-4 outline-none focus:ring-2 focus:ring-emerald-500"
          />


          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-5 py-4 outline-none focus:ring-2 focus:ring-emerald-500"
          >

            <option value="">
              Select Budget Range
            </option>

            <option value="₹10,000 - ₹50,000">
              ₹10,000 - ₹50,000
            </option>

            <option value="₹50,000 - ₹1,00,000">
              ₹50,000 - ₹1,00,000
            </option>

            <option value="₹1,00,000+">
              ₹1,00,000+
            </option>

          </select>


          <textarea
            name="message"
            rows={6}
            placeholder="Project Details"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-emerald-500"
          />


          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-700 py-4 font-semibold hover:bg-emerald-800 transition disabled:opacity-50"
          >
            {loading
              ? "Submitting..."
              : "Submit Request"}
          </button>


        </form>

      </div>
    </section>
  );
}