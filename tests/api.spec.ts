import { test, expect } from '@playwright/test'

const testData = [
    [0, 1],
    [1, 1],
    [10, 3628800],
    [50, 3.0414093201713376e+64],
    [100, 9.332621544394415e+157],
    [171, Infinity],
]

testData.forEach(values => {
    test(`API test - factorial of ${values[0]}`, async ({request}) => {
      let [input, expected] = values
      const response = await request.post('/factorial', {
        form: {number: input}
      })
      expect(response.ok()).toBeTruthy()
      expect(await response.json()).toEqual({
        answer: expected
      })
    })
  })

// should return a 400, with an error related to invalid input - it returns a 500 instead 🐞🐞🐞
test(`API test - invalid values`, async ({request}) => {
    const response = await request.post('/factorial', {
        form: {number: 'totally wrong'}
    })
    expect(response.ok()).not.toBeTruthy()
    expect(response.status()).toEqual(400)
})