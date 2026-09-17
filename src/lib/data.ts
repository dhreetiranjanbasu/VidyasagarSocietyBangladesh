import fs from "node:fs/promises";
import path from "node:path";

const dataDir = path.join(process.cwd(), "server", "data");

export async function readData<T>(file: string): Promise<T> {
  const raw = await fs.readFile(path.join(dataDir, file), "utf8");
  return JSON.parse(raw) as T;
}

export async function appendData<T>(file: string, item: T) {
  const full = path.join(dataDir, file);
  const raw = await fs.readFile(full, "utf8");
  const list = JSON.parse(raw) as T[];
  list.unshift(item);
  await fs.writeFile(full, JSON.stringify(list, null, 2), "utf8");
  return item;
}
