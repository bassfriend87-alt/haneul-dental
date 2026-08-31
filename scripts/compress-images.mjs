// 원본 이미지를 압축해서 덮어씁니다 (sharp는 Next.js 의존성으로 이미 설치됨)
import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

const dir = new URL("../public/images", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const files = (await readdir(dir)).filter((f) => /\.(jpg|jpeg)$/i.test(f));

for (const file of files) {
  const path = join(dir, file);
  const { size: before } = (await import("fs")).statSync(path);

  await sharp(path)
    .jpeg({ quality: 82, progressive: true })
    .toFile(path + ".tmp");

  (await import("fs")).renameSync(path + ".tmp", path);

  const { size: after } = (await import("fs")).statSync(path);
  console.log(`${file}: ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`);
}
