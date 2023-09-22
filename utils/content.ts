import { Student } from "../types/types";

export const specialFields: (keyof Student["achievements"])[] = [
  "positions_of_responsibility",
  "scholarships",
  "competitions",
  "special_talents",
  "role_model",
  "objectives",
  "extra_curricular",
];
