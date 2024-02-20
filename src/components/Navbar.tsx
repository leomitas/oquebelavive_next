import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="bg-lavender-rose-800 flex justify-between p-2 text-white">
      <div className="flex items-center">
        <h2>Oquebelavive</h2>
      </div>
      <div>
        <Button variant={"ghost"}>Home</Button>
      </div>
    </nav>
  );
}
