/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:WC5cYjDU8baX@ep-shiny-hall-a14vcrl4.ap-southeast-1.aws.neon.tech/Ai-Content-Generator?sslmode=require',
    }
  };