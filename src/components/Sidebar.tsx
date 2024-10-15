"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[300px] border-r min-h-screen p-4">
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <p>
        <Link href="/createTask">Create Task </Link>
      </p>
      <p>
        <Link href="/editTask">Edit Task </Link>
      </p>
    </div>
  );
}
