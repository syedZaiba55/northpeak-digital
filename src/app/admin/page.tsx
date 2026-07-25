"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
  status: string;
};

export default function AdminPage() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [applications, setApplications] = useState(0);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [statusData, setStatusData] = useState([
    { name: "New", value: 0 },
    { name: "Contacted", value: 0 },
    { name: "Converted", value: 0 },
    { name: "Closed", value: 0 },
  ]);


  function updateAnalytics(data: Lead[]) {
    setStatusData([
      {
        name: "New",
        value: data.filter(
          (lead) => lead.status === "New"
        ).length,
      },
      {
        name: "Contacted",
        value: data.filter(
          (lead) => lead.status === "Contacted"
        ).length,
      },
      {
        name: "Converted",
        value: data.filter(
          (lead) => lead.status === "Converted"
        ).length,
      },
      {
        name: "Closed",
        value: data.filter(
          (lead) => lead.status === "Closed"
        ).length,
      },
    ]);
  }


  async function loadData() {
    const usersResponse = await fetch("/api/admin/users");
    const usersData = await usersResponse.json();

    setTotalUsers(usersData.count);


    const leadsCountResponse = await fetch("/api/admin/leads");
    const leadsCountData = await leadsCountResponse.json();

    setApplications(leadsCountData.count);


    const leadsResponse = await fetch("/api/admin/leads/list");
    const leadsData = await leadsResponse.json();

    setLeads(leadsData);
    updateAnalytics(leadsData);
  }


  useEffect(() => {
    loadData();
  }, []);


  async function updateStatus(id: string, status: string) {
    await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    });

    loadData();
  }


  async function deleteLead(id: string) {
    await fetch(`/api/admin/leads/${id}`, {
      method: "DELETE",
    });

    loadData();
  }


  const filteredLeads = leads.filter((lead) => {

    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search);


    const matchesFilter =
      filter === "All" ||
      lead.status === filter;


    return matchesSearch && matchesFilter;
  });


  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your platform here
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-gray-700">
              Total Users
            </h2>
            <p className="text-4xl font-bold text-teal-600 mt-3">
              {totalUsers}
            </p>
          </div>


          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-gray-700">
              Applications
            </h2>
            <p className="text-4xl font-bold text-teal-600 mt-3">
              {applications}
            </p>
          </div>


          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-gray-700">
              Active Users
            </h2>
            <p className="text-4xl font-bold text-teal-600 mt-3">
              {totalUsers}
            </p>
          </div>

        </div>


        {/* Analytics */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Lead Status Distribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>

                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {statusData.map((item, index) => (
                    <Cell key={index} />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>

          </div>


          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Dashboard Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart
                data={[
                  {
                    name: "Users",
                    value: totalUsers,
                  },
                  {
                    name: "Leads",
                    value: applications,
                  },
                ]}
              >

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="value" />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* Leads Management */}

        <div className="bg-white rounded-xl shadow mt-10 p-6">

          <h2 className="text-2xl font-bold mb-5 text-gray-900">
            Manage Leads
          </h2>


          <div className="flex flex-col md:flex-row gap-4 mb-6">

            <input
              placeholder="Search by name, email, phone"
              className="border p-3 rounded w-full text-gray-900"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />


            <select
              className="border p-3 rounded text-gray-900"
              value={filter}
              onChange={(e)=>setFilter(e.target.value)}
            >
              <option>All</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Converted</option>
              <option>Closed</option>
            </select>

          </div>


          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>
                <tr className="border-b text-gray-600">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>


              <tbody>

                {filteredLeads.map((lead)=>(

                  <tr key={lead.id} className="border-b">

                    <td className="p-3 text-gray-900">
                      {lead.name}
                    </td>

                    <td className="p-3 text-gray-700">
                      {lead.email}
                    </td>

                    <td className="p-3 text-gray-700">
                      {lead.phone}
                    </td>

                    <td className="p-3">

                      <select
                        value={lead.status || "New"}
                        onChange={(e)=>
                          updateStatus(
                            lead.id,
                            e.target.value
                          )
                        }
                        className="border rounded p-2"
                      >
                        <option>New</option>
                        <option>Contacted</option>
                        <option>Converted</option>
                        <option>Closed</option>
                      </select>

                    </td>

                    <td className="p-3">

                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </main>
  );
}