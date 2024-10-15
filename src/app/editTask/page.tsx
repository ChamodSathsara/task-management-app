import React from "react";
import Link from "next/link";
import { CardWithForm } from "@/components/ui/CardWithForm";
import { MenubarDemo } from "@/components/ui/MenubarDemo";
import ProfileForm from "@/components/ProfileForm";

function page() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
        Edit Task
      </h1>
      <div>
        <ProfileForm />
      </div>
    </div>
  );
}

export default page;
