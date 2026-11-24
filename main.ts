import { mkdirSync, writeFileSync } from "node:fs";

// The funniest toaster error message: a deadpan appliance that found a
// fork in its slot and responds like a partner ending a relationship.
const LINE = "ERROR: Found a fork in slot 2. We need to talk.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
