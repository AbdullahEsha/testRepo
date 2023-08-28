"use client";
import { usePathname } from "next/navigation";
import { FaInfo } from "react-icons/fa";

const TopBar = () => {
  const router = usePathname();
  const processed = router.split("/");
  let lastElement = processed[processed.length - 1];
  const lastValue = lastElement.split("-").join(" ");
  const url = decodeURIComponent(lastValue.toUpperCase()); // Decode the URL componentoUpperCase();
  return (
    <div className="container">
      <h1 className="flex items-center justify-center gap-x-4 h-28 border-b-2 text-xl">
        <FaInfo />
        {url}
      </h1>
    </div>
  );
};

export default TopBar;
