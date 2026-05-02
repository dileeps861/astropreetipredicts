function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value || value === "replace-me") {
    throw new Error(
      `Missing ${name}. Copy sanity/.env.example to sanity/.env and set a real Sanity project value.`,
    );
  }

  return value;
}

export const sanityProjectId = requiredEnv("SANITY_STUDIO_PROJECT_ID");
export const sanityDataset =
  process.env.SANITY_STUDIO_DATASET || "production";
