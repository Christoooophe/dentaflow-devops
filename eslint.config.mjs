import js from "@eslint/js";
import globals from "globals";

export default [
    {
        files: ["src/api/**/*.js"],
        languageOptions: {
            globals: globals.node,
            sourceType: "commonjs",
        },
        rules: { ...js.configs.recommended.rules },
    }
];
