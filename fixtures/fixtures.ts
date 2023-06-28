import { test as base } from '@playwright/test'
import { HomePage } from '../pages/home'

type Pages = {
  homePage: HomePage
}

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
})
