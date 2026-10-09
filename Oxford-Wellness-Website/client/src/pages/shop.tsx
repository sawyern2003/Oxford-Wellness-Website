import { useEffect } from "react";
import { useLocation } from "wouter";

/** Legacy /shop URL – redirects to curated clinical recommendations. */
export default function Shop() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/recommended-skincare");
  }, [setLocation]);
  return null;
}
