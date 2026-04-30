import { useEffect, useState } from "react";

export default function Admin() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F5EFE6] text-[#3E3E3E]">

      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r border-[#E5D9CC] p-6">
        <h1 className="text-2xl font-serif text-[#5A0F14] mb-10">
          Admin Panel
        </h1>

        <ul className="space-y-4 text-[#6D5C4D]">
          <li className="hover:text-[#5A0F14] cursor-pointer">Dashboard</li>
          <li className="hover:text-[#5A0F14] cursor-pointer">Contacts</li>
          <li className="hover:text-[#5A0F14] cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-10">

        <h2 className="text-3xl font-serif text-[#5A0F14] mb-8">
          Contact Inquiries
        </h2>

        <div className="bg-white rounded-xl shadow-sm border border-[#E5D9CC] overflow-hidden">

          {/* HEADER */}
          <div className="grid grid-cols-5 p-4 border-b border-[#E5D9CC] text-sm text-[#8B7A6B]">
            <p>Name</p>
            <p>Phone</p>
            <p>Email</p>
            <p>Location</p>
            <p>Actions</p>
          </div>

          {/* DATA */}
          {contacts.map((c) => (
            <div
              key={c._id}
              className="grid grid-cols-5 p-4 border-b border-[#F0E6D8] items-center hover:bg-[#FAF6F0]"
            >
              <p className="font-medium">{c.name}</p>
              <p>{c.phone}</p>
              <p className="truncate">{c.email}</p>
              <p>{c.location || "-"}</p>

              <div className="flex gap-4">

                {c.fileUrl && (
                  <a
                    href={c.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#C89B3C] font-medium"
                  >
                    View PDF
                  </a>
                )}

                <button className="text-red-500 hover:underline">
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}