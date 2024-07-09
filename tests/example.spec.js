// @ts-check
import { test, expect } from '@playwright/test'
const hostUrl = 'http://localhost:5173/'

test('has a fact and image', async ({ page }) => {
  await page.goto(hostUrl)
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')
  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('https://cataas.com/cat/')).toBeTruthy()
})

test('clicking button shows different fact and image', async ({ page }) => {
  await page.goto(hostUrl)
  const initialText = await page.getByRole('paragraph').textContent()
  const initialImageSrc = await page.getByRole('img').getAttribute('src')

  await page.click('button')
  const newText = await page.getByRole('paragraph').textContent()
  const newImageSrc = await page.getByRole('img').getAttribute('src')

  await expect(newText).not.toBe(initialText)
  await expect(newImageSrc).not.toBe(initialImageSrc)
})
