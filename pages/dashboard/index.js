import React from "react";
import DashboardMainScreen from "../../components/admin/DashboardMainScreen";
import useAuth from "../../components/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const index = () => {
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !currentUser) {
      router.push("/login");
    }
  }, [loading, currentUser, router]);

  if (loading) {
    return <div>Lädt...</div>;
  }

  if (!currentUser) {
    return null;
  }

  return <DashboardMainScreen />;
};

export default index;
