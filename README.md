# cli boilerplate

## Installation

```bash
// Clone the repository
git clone git@github.com:Khazl/cli-boilerplate.git

// Go into the root directory of the project
cd cli-boilerplate

// Install it globally
npm install -g .
```

## Usage

Run this CLI tool by this command:
```bash
cli-boilerplate-generate
```

You can change this command in the package.json:
```json
  ...
  "bin": {
    "cli-boilerplate-generate": "./bin/global.js"
  },
  ...
```

## Development

You will find the needed logic in:
- `/bin` - Imports the application logic and executes it.
- `/lib` - Contains the application logic.

### Recommendations

Use this libs, if needed:
- Passing arguments into your application: https://www.npmjs.com/package/minimist
- Question wizard: https://www.npmjs.com/package/inquirer
- Execute shell commands: https://nodejs.org/api/child_process.html
- Loading animation: https://www.npmjs.com/package/ora
- ...