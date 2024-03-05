import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createAt" | "updatedAt" | "deleteAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
