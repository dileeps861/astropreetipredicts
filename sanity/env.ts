function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value || value === "replace-me") {
    throw new Error(
      `Missing ${name}. Copy sanity/.env.example to sanity/.env and set a real Sanity project value.`,
    );
  }

  return value;
}

function requiredProjectId() {
  const value = requiredEnv("SANITY_STUDIO_PROJECT_ID");

  if (!/^[a-z0-9-]+$/.test(value)) {
    throw new Error(
      "Invalid SANITY_STUDIO_PROJECT_ID. Sanity project IDs can only include lowercase letters, numbers, and dashes.",
    );
  }

  return value;
}

export const sanityProjectId = requiredProjectId();
export const sanityDataset =
  process.env.SANITY_STUDIO_DATASET || "production";
