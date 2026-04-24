"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PricingRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#get-started");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <p className="text-gray-400">Redirecting...</p>
    </div>
  );
}
