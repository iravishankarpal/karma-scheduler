// import CredentialsProvider from "next-auth/providers/credentials";

// export const options = {
//     providers: [
//         CredentialsProvider({
//             type: "credentials",
//             //ts-ignore
//             async authorize(c) {
//                 if (c == null) return null;

//                 try {
//                 } catch (error: Error | any) {
//                     console.log("next auth error", error.message);
//                     throw new Error(error.response?.data?.error?.message || "Invalid credentials");
//                 }
//             },
//         }),
//     ],
//     session: {
//         maxAge: 60 * 60 * 24, // 1 hour
//         strategy: "jwt",
//     },
//     jwt: {
//         maxAge: 60 * 60 * 24, // 1 hour,
//         encryption: true,
//     },
//     callbacks: {
//         session: async ({ session, token }: { session: any; token: any }) => {
//             session.id = token.id;
//             session.jwt = token.jwt;
//             session.user.username = token.username;
//             return session;
//         },
//         jwt: async ({ token, user }: { user: any; token: any }) => {
//             if (user) {
//                 token.id = user.id;
//                 token.jwt = user.jwt;
//                 token.username = user.username;
//             }
//             return token;
//         },
//     },
//     pages: {
//         signIn: "/login",
//     },
// };
