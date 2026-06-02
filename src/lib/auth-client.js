import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

// ✅ reuse SAME instance
//export const { signIn, signUp, useSession } = authClient;
export const { useSession } = authClient;

