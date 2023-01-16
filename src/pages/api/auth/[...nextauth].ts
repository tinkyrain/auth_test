import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "test@test.ru",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        // database look up
        if (
          credentials.username === "admin" &&
          credentials.password === "123"
        ) {
          return {
            id: 2,
            name: "admin",
            email: "test@test.ru",
          };
        }

        // login failed
        return null;
      },
    }),
  ],
});