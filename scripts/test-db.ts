import { testDbConnection } from "../app/utils/db.ts";

async function main() {
  await testDbConnection();
  console.log("db ok");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
