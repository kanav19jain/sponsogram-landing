import puppeteer from 'puppeteer-core'
import fs from 'node:fs'

const outDir = process.env.TEMP + '\\spg-shots'
fs.mkdirSync(outDir, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--hide-scrollbars', '--force-device-scale-factor=1'],
})

const errors = []

async function shoot(name, width, height, fn) {
  const page = await browser.newPage()
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
  page.on('pageerror', (e) => errors.push(String(e)))
  await page.setViewport({ width, height, deviceScaleFactor: 1 })
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 1800))
  if (fn) await fn(page)
  await page.screenshot({ path: `${outDir}\\${name}.png` })
  await page.close()
}

await shoot('hero-desktop', 1440, 900)
await shoot('rev-desktop', 1440, 900, async (page) => {
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 0.92, behavior: 'instant' }))
  await new Promise((r) => setTimeout(r, 1600))
})
await shoot('rev2-desktop', 1440, 900, async (page) => {
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 1.55, behavior: 'instant' }))
  await new Promise((r) => setTimeout(r, 1600))
})
await shoot('mobile-hero', 390, 844)
await shoot('mobile-rev', 390, 844, async (page) => {
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 0.95, behavior: 'instant' }))
  await new Promise((r) => setTimeout(r, 1600))
})
await shoot('tablet-hero', 820, 1100)

// overflow + metrics
const page = await browser.newPage()
await page.setViewport({ width: 390, height: 844 })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' })
await new Promise((r) => setTimeout(r, 600))
const metrics = await page.evaluate(() => ({
  scrollW: document.documentElement.scrollWidth,
  clientW: document.documentElement.clientWidth,
  scrollH: document.documentElement.scrollHeight,
}))
await page.close()

await browser.close()
console.log(JSON.stringify({ outDir, errors, metrics }, null, 2))
