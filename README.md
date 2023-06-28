# factorial-automated-tests
Playwright demo against qainterview factorial page.
It contains both UI and API tests (see `tests` folder)

## Automated tests

Install dependencies (node >= v18 recommended)

```
npm install
```

Install Chromium browser

```
npx playwright install chromium
```

Run tests

```
npm test
```

Test are running in headless mode by default, but you can run it headed:

```
HEADLESS=false npx playwright test
```

If tests are failing, test reports will automatically displayed in the browser, along with steps, recorded video and trace browser (which allows checking browser state for each step). Otherwise reports are located in `playwright-report`. Reports can also be viewed by running

```
npx playwright show-report
```

### Bugs

Some bugs I noticed on the page:

- Page title is `Factoriall`
- Starting with input 172, the result displayed is `Infinity`. Let's say this is fine, considering the limitations. However, starting with input value 992, the POST call gets a 500 (Internal Server Error) response and the result does not display `Infinity`, it still shows the previous result (or nothing, if there was no previous calculation)
- Enter event is not handled, i.e. when typing 5 and hitting Enter we would expect the calculation to be performed
- If using alphabetic characters or positive float numbers, an error message is displayed `Please enter an integer`, as expected. However, for negative numbers, the validation is not done in UI, but the data is sent to server and the response is INTERNAL SERVER ERROR - the reason for this is using `parseInt` for validation and negative numbers are integers, a better check would be to also check the number is >= 0 