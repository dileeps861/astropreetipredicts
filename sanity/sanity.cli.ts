import { defineCliConfig } from "sanity/cli";
import { sanityDataset, sanityProjectId } from "./env";

export default defineCliConfig({
  api: {
    projectId: sanityProjectId,
    dataset: sanityDataset,
  },
});
