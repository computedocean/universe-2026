// Pre-renders index.html into dist/index.html so the page works without a server.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import template from "lodash/template.js";
import { render } from "../src/render.js";

const data = JSON.parse(readFileSync("src/announcements.json", "utf8"));
const page = template(readFileSync("index.html", "utf8").replace(
  /<div id="app">[\s\S]*<\/script>/,
  '<div id="app"><%= cards %></div>'
));

mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", page({ cards: render(data) }));
console.log(`Built dist/index.html with ${data.length} announcements`);
