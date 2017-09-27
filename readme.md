# TDD Playground

This is a place to set up examples for playing with the ideas of Test Driven Development (TDD).

## Installation

Click on **Clone or Download** to download the files of this repository to your machine.

Once downloaded, navigate inside of the repository in your terminal:

```bash
# Example
$ cd tdd-playground
```

Be sure to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) installed.

Then use npm to install the packages necessary to run the tests.

```bash
npm install
```

## Running the Tests

### Run Tests Once

```bash
npm test
```

### Run Tests with Watch

This keeps the tests running. When a local file is saved, the tests will re-run, pertaining to the updated file.

```bash
npm run test:watch
```

### Test with Nyan Cat

This is less informative since it doesn't show you which tests are passing or failing. But it's much more entertaining.

```bash
npm run test:cat
```

<img src="https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif" alt="Nyan Cat" />

## Adding More Tests

The npm scripts set up for testing are looking for any files in the repository that end with _specs.js_ in the filename.

You can add more tests to the existing files, or create new files following that naming structure.
