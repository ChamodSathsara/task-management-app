//"use server";

import { formSchema } from "@/lib/tasks";
import { z } from "zod";
import { Button } from "../ui/button";

import { Value } from "@radix-ui/react-select";
import { MyData, setMyData } from "./MyData";
import { useState } from "react";

export const update = (data: z.infer<typeof formSchema>) => {
  const id = data.id;
  const check = (_id: string) => {
    try {
      for (let i = 0; i < MyData.length; i++) {
        if (MyData[i].id == id) {
          console.log("Update a data");
          // Operations
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(Value);
};
