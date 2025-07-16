import { defineConfig } from "cypress";
// import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import codeCoverage from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      codeCoverage(on, config)
      // ✅ Add tsConfigPath here
      await addCucumberPreprocessorPlugin(on, {
        ...config,
        tsConfigPath: "tsconfig.json",
      }as any);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.feature",
  },
});
