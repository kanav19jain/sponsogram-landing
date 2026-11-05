import puppeteer from 'puppeteer-core'
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' })
await page.evaluate(() => window.scrollTo(0, 900))
await new Promise(r => setTimeout(r, 2000))
const data = await page.evaluate(() => {
  const h2 = document.querySelector('h2')
  const spans = [...h2.querySelectorAll('.overflow-hidden > span')]
  const figs = [...document.querySelectorAll('figure')]
  return {
    scrollY: window.scrollY,
    h2: h2.getBoundingClientRect().toJSON(),
    spans: spans.map(s => ({ text: s.textContent.trim().slice(0,20), rect: s.getBoundingClientRect().toJSON(), transform: getComputedStyle(s).transform, opacity: getComputedStyle(s).opacity })),
    figures: figs.slice(0,6).map(f => ({ rect: f.getBoundingClientRect().toJSON(), opacity: getComputedStyle(f).opacity, clip: getComputedStyle(f).clipPath }))
  }
})
console.log(JSON.stringify(data, null, 2))
await browser.close()
