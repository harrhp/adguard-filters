#! /usr/bin/env node

import fs from 'fs';
import https from 'https';
import path from 'path';

const tmpDir = path.resolve("tmp");
fs.rmSync(tmpDir, { recursive: true, force: true });
fs.mkdirSync(tmpDir);
const config = JSON.parse(fs.readFileSync("./config/config.json"));
config.sources.forEach(source => {
  const file = fs.createWriteStream(path.resolve(tmpDir, source.name + ".txt"));
  https.get(source.source, response => {
    response.pipe(file);

    file.on("finish", () => {
      file.close();
      console.log("Download Completed " + source.name);
    });
  })
});
