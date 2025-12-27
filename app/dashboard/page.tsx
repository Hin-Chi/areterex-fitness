"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/"); // redirect if not logged in
        return;
      }
      setUser(user);

      // fetch profile
      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("id, role")
        .eq("id", user.id)
        .single();

      if (!error) {
        setProfile(profileData);
      }
    };

    getUser();
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      {user ? (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {profile?.role || "Not assigned"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
