import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "_posts");
const outputFile = path.join(process.cwd(), "src", "lib", "posts.generated.json");

const files = fs
  .readdirSync(postsDirectory)
  .filter((file) => file.endsWith(".md"));

const posts = await Promise.all(
  files.map(async (file) => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, file), "utf8");
    const { data, content } = matter(fileContents);
    const rendered = await remark().use(html).process(content);

    return {
      ...data,
      slug: file.replace(/\.md$/, ""),
      content,
      html: rendered.toString(),
    };
  })
);

posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

fs.writeFileSync(outputFile, `${JSON.stringify(posts, null, 2)}\n`);
console.log(
  `[posts] generated ${posts.length} post(s) -> ${path.relative(process.cwd(), outputFile)}`
);
