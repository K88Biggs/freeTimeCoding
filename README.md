# 🎭 Playwright + TypeScript + Percy Visual Testing Scaffold

This project is a clean scaffold for end-to-end testing using [Playwright](https://playwright.dev/), [TypeScript](https://www.typescriptlang.org/), and [Percy](https://percy.io/) for visual testing.

It supports:
- Visual regression testing with Percy
- CI/CD integration
- Headless browser automation
- Type-safe test scripts
- Docker-based test execution

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/K88Biggs/freeTimeCoding.git
cd freeTimeCoding
````

---

### 2. **Install Dependencies**

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

```bash
npm install
```

---

### 3. **Install Playwright Browsers**

```bash
npx playwright install
```

---

### 4. **Set Percy Token**

You'll need a Percy token to run visual tests. Sign up at [percy.io](https://percy.io/), create a project, and copy the token.

```bash
export PERCY_TOKEN=your_percy_project_token_here
```

On Windows (PowerShell):

```powershell
$env:PERCY_TOKEN="your_percy_project_token_here"
```

---

## 🧪 Running Tests

### Run all tests:

```bash
npm test
```

### Run Percy visual tests:

```bash
npm run percy:test
```

---

## 🐳 Running Tests with Docker

### Build the Docker container:

```bash
docker build -t percy-playwright-ts .
```

### Run tests inside Docker:

```bash
docker run -e PERCY_TOKEN=your_percy_token -v ${PWD}:/app percy-playwright-ts
```

> Replace `your_percy_token` with your actual token.

---

## 📂 Project Structure

```bash
.
├── tests/                  # All Playwright test specs
│   ├── example.spec.ts
│   └── visual.spec.ts
├── pages/                  
│   ├── modernLoginPage.spec.ts
│   └── setPassword.spec.ts
├── playwright.config.ts   # Playwright configuration
├── tsconfig.json          # TypeScript configuration
├── Dockerfile             # Docker setup
├── .dockerignore
├── .gitignore
├── package.json
└── README.md              # You're here!
```

---

## 🧾 Scripts

```json
"scripts": {
  "test": "npx playwright test tests",
  "test:headed": "npx playwright test --headed",
  "test:debug": "npx playwright test --debug",
  "percy:test": "percy exec -- npx playwright test"
}
```

---

<<<<<<< HEAD
## Prerequisites
=======
## ✅ Prerequisites
>>>>>>> 7fe4b1c4dbaa1d24ba115e0f033ba1301e42cbc6

* Node.js ≥ 18.x
* Git
* Docker (optional, for containerized testing)
* Percy account & token

---

## 🤝 Contributing

Fork, make changes, and submit a pull request. Suggestions and improvements are welcome!

---

## 📄 License

MIT

<<<<<<< HEAD
# freeTimeCoding
=======
>>>>>>> 7fe4b1c4dbaa1d24ba115e0f033ba1301e42cbc6
