import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "src"; // Base directory to start the search

// Recursive function to process directories
function convertImagesInDir(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) throw err;
        if (stats.isDirectory()) {
          convertImagesInDir(filePath); // Recursive call for subdirectory
        } else if (
          stats.isFile() &&
          (path.extname(file).toLowerCase() === ".png" ||
            path.extname(file).toLowerCase() === ".jpg" ||
            path.extname(file).toLowerCase() === ".jpeg")
        ) {
          const outputFilePath = path.join(
            dir,
            file.replace(path.extname(file), ".webp")
          );

          sharp(filePath)
            .toFormat("webp")
            .toFile(outputFilePath, (err) => {
              if (err) throw err;
              console.log(`${file} converted to WebP`);
            });
        }
      });
    });
  });
}

convertImagesInDir(inputDir);
