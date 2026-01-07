"use client";

import DashboardContent from "./_components/DashboardContent";
import { Suspense, useEffect, useState } from "react";
import { authClient } from "../../utils/authClient";
import { useRouter } from "next/navigation";

function DashboardContentWrapper() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando dashboard...</p>
          </div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let cancel = false;
    authClient
      .getSession()
      .then(({ data }) => {
        if (cancel) return;
        if (!data?.user) {
          router.replace("/admin");
        } else {
          setAllowed(true);
        }
      })
      .catch(() => {
        if (!cancel) router.replace("/admin");
      });
    return () => {
      cancel = true;
    };
  }, [router]);

  if (!allowed) return null;

  return <DashboardContentWrapper />;
}