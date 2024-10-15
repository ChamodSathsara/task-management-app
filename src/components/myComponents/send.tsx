//"use server";

import { formSchema } from "@/lib/tasks";
import { z } from "zod";
import { Button } from "../ui/button";

import { Value } from "@radix-ui/react-select";
import { MyData, setMyData } from "./MyData";
import { useState } from "react";

export const send = (data: z.infer<typeof formSchema>) => {
  setMyData([...MyData, data]);
  console.log(Value);
};
