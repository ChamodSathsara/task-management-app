import { z } from "zod";

export const formSchema = z.object({
  id: z.string().max(2).min(1, {
    message: "Id must be at least 2 Numbers.",
  }),
  description: z.string().min(10, {
    message: "description must be at least 20 Characters.",
  }),
  status: z.string().min(4, {
    message: "Set ToDo , Done or process",
  }),
  date: z.string().min(10, {
    message: "Set the date this structure - 2000 10 01",
  }),
  update: z.null(),
  delete: z.null(),
});
