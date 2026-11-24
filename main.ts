import { mkdirSync, writeFileSync } from "node:fs";

const entry = "One star. He bought me a $400 bed and sulked when I slept in the box instead. I am the only adult in this house.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
