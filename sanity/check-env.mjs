import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const envPath = resolve(dirname(fileURLToPath(import.meta.url)), ".env");

if (existsSync(envPath)) {
  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split("=");
    process.env[key] ||= valueParts.join("=").trim();
  }
}

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;

if (!projectId || projectId === "replace-me") {
  console.error(
    [
      "Missing SANITY_STUDIO_PROJECT_ID.",
      "Create sanity/.env from sanity/.env.example and set your real Sanity project ID.",
      "You can create/select a project with: npx sanity init",
    ].join("\n"),
  );
  process.exit(1);
}
