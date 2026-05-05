import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();

const db = client.db("skill-sphere"); // ✅ explicitly set DB

// src/lib/auth.js
// src/lib/auth.js
export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  // ADD THIS: It forces cookies to work on localhost http
  advanced: {
    useSecureCookies: false, 
  },
  trustedOrigins: ["http://localhost:3000"],
});