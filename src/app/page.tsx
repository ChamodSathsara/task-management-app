import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { MenubarDemo } from "@/components/ui/MenubarDemo";
import { TableDemo } from "@/components/TableDemo";

export default function Home() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  p-4">
        Task Management Application
      </h1>
      <div className="p-6">
        <TableDemo />
      </div>
    </>
  );
}
