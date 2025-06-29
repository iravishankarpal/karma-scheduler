import NextAuth from "next-auth";
import { options } from "./options";

// @ts-ignore
const handlers = NextAuth(options);

export { handlers as GET, handlers as POST };
