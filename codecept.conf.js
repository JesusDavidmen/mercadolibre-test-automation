const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');


setHeadlessWhen(process.env.HEADLESS);


setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: 'output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.mercadolibre.com',
      show: true,
      screenshotOnFail: true,  
      waitForTimeout: 5000
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    htmlReporter: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'allure-results',
      enableStepsScreenshots: true,      // captura de cada paso
      disableWebdriverScreenshots: false // mantiene las capturas del navegador también
    }
  },
  name: 'mercadolibre-test-jesus'
};
