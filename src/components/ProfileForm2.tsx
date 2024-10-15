"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/tasks";
import { send } from "./myComponents/send";
import { useState } from "react";
import { MyData, setMyData } from "./myComponents/MyData";
import { Description } from "@radix-ui/react-toast";
import { update } from "./myComponents/update";

export default function ProfileForm() {
  // ...
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      description: "",
      status: "",
      date: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    update(values);
    console.log(values);
  }

  const handleClick = () => {
    // const newArray = [{ values }];
    // //const [task, setTask] = useState([MyData]);
    // // const combinedArray = [...MyData, ...newArray];
    // // setTask([...combinedArray]);
    // console.log(newArray);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-10">
        {/* Id text field */}
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input placeholder="01" {...field} />
              </FormControl>
              <FormDescription>This is Task Id.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* description text feild */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>This is Task Name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* status text feild */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Input placeholder="To do , done or processing" {...field} />
              </FormControl>
              <FormDescription>This is Task Availability.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date text feild */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input placeholder="2000 00 00" {...field} />
              </FormControl>
              <FormDescription>Create date this inclede.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" onClick={handleClick}>
          Update
        </Button>
      </form>
    </Form>
  );
}
