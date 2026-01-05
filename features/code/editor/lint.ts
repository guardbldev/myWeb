import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import { ESLint } from "eslint";

// Format code
export async function autoFormatCode(code: string) {
  return prettier.format(code, { parser: "babel", plugins: [parserBabel] });
}

// Lint code
export async function lintCode(code: string) {
  const eslint = new ESLint({ baseConfig: { extends: ["eslint:recommended"] } });
  const results = await eslint.lintText(code);
  return results;
}