"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToLanding() {
  const router = useRouter();

  useEffect(() => {
    router.push("/landing");
  }, [router]);

  return null;
}
