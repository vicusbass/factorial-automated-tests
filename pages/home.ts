import { Locator, Page } from '@playwright/test'

export class HomePage {
  readonly calculateBtn: Locator = this.page.locator('#getFactorial')
  readonly input: Locator = this.page.locator('input#number')
  readonly result: Locator

  constructor (readonly page: Page) {
    this.page = page
    this.result = page.locator('p#resultDiv')
  }

  async goto () {
    await this.page.goto('/')
    await this.page.waitForLoadState()
  }

  async typeValue(value: string|number) {
    await this.input.type(`${value}`)
  }

  async calculate() {
    await this.calculateBtn.click()
  }
}
