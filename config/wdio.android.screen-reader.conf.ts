import { config as sharedConfig } from "./wdio.shared.conf.ts";

export const config: WebdriverIO.Config = {
  ...sharedConfig,

  specs: ["../test/specs/e2e-mobile/android/screen-reader.e2e.ts"], 

  capabilities: [
    {
      platformName: "android",
      "appium:deviceName": "Samsung Galaxy S23",
      "appium:platformVersion": "13.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": "bs://custom_id=bs-demo-android",
      "bstack:options": {
        buildName: "Screen Reader - Android",
        sessionName: "TalkBack Accessibility",
        debug: true,
        networkLogs: true,
        deviceLogs: true,
        appiumLogs: true,
        video: true,
      },
    },
  ],
};