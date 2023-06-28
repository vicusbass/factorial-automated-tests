import { expect } from '@playwright/test'
import { test } from '../fixtures/fixtures'

test.beforeEach(async ({homePage}) => {
  await homePage.goto()
})

const testData = [[0, 1], [1, 1], [10, 3628800], [50, 3.0414093201713376e+64], [100, 9.332621544394415e+157], [171, 'Infinity']]

testData.forEach(values => {
  test(`factorial of ${values[0]}`, async ({homePage}) => {
    let [input, expected] = values
    await homePage.typeValue(input)
    await homePage.calculate()
    await expect(homePage.result).toHaveText(`The factorial of ${input} is: ${expected}`)
  })
})

const negativeTestData = [['oh no', 'Please enter an integer'], [-50, 'Please enter a positive integer']]

negativeTestData.forEach(values => {
  test(`factorial of ${values[0]}`, async ({homePage}) => {
    let [input, expected] = values
    await homePage.typeValue(input)
    await homePage.calculate()
    await expect(homePage.result).toHaveText(expected as string)
  })
})