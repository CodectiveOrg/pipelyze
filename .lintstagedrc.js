// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*": "prettier --ignore-unknown --write",
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "*.css": ["stylelint --fix"],
};
