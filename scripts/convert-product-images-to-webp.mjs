import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const targetDirectories = [
  path.join(projectRoot, 'public', 'images', 'electrical'),
  path.join(projectRoot, 'public', 'images', 'plumbing'),
]

async function convertDirectory(dirPath) {
  const entries = await readdir(dirPath)

  for (const entry of entries) {
    const inputPath = path.join(dirPath, entry)
    const entryStats = await stat(inputPath)

    if (!entryStats.isFile() || !/\.jpe?g$/i.test(entry)) {
      continue
    }

    const outputPath = inputPath.replace(/\.jpe?g$/i, '.webp')

    await sharp(inputPath)
      .rotate()
      .webp({ quality: 82, effort: 6 })
      .toFile(outputPath)

    console.log(`Converted ${path.relative(projectRoot, inputPath)} -> ${path.relative(projectRoot, outputPath)}`)
  }
}

for (const directory of targetDirectories) {
  await convertDirectory(directory)
}