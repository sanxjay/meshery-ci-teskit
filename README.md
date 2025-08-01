# Meshery CI TestKit: Automated UI & Workflow Validation Suite

This project is a simulation of Meshery’s dashboard frontend and its CI testing environment. Provides continous integration on this project itself. 

## Tech Stack

- React (with React Router)
- Tailwind CSS
- Playwright
- GitHub Actions

## Getting Started

1. Clone the repository `git clone https://github.com/sanjay/meshery-ci-testkit`
2. Install all the dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Run the tests: `npm run test:e2e`

## CI/CD

The CI/CD pipeline is set up with GitHub Actions. It runs on every push and pull request to the `main` branch. The workflow installs dependencies, runs the tests, and uploads the test results.

[![Meshery CI TestKit](https://github.com/sanjay/meshery-ci-testkit/actions/workflows/ci.yml/badge.svg)](https://github.com/sanjay/meshery-ci-testkit/actions/workflows/ci.yml)
