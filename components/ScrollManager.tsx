"use client";

import { useEffect } from "react";

export default function ScrollManager() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      // If there is no hash in the URL, ensure we start at the top
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  return null;
}
