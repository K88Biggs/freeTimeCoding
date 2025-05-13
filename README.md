# 🧪 Playwright Test Automation Framework (TypeScript)

This repository contains an automated testing framework built using [Playwright](https://playwright.dev/) and TypeScript. It follows the **Page Object Model (POM)** pattern and includes tests for Hudl’s login functionality across devices and social login buttons.

---

## 📁 Project Structure

```

├── pages/                  # Page Object classes
├── tests/                  # Test specs
├── utils/                  # Utility functions
├── test-results/           # Playwright test output
├── .env                    # Environment variables
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json           # TypeScript config
├── package.json            # Node dependencies
├── Dockerfile              # Containerization config

````

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
````

---

## ✅ Run Tests

### Run All Tests

```bash
npx playwright test
```

### Run in Headed Mode

```bash
npx playwright test --headed
```

### Run Specific Test

```bash
npx playwright test tests/login.spec.ts
```

### Show HTML Report

```bash
npx playwright show-report
```

---

## 🖼 Visual Testing (Percy, Optional)

1. Add your Percy token to `.env`:

```
PERCY_TOKEN=your-token-here
```

2. Install Percy:

```bash
npm install --save-dev @percy/cli
```

3. Run Tests with Percy:

```bash
npx percy exec -- npx playwright test
```

---

## 🧱 Tech Stack

* **Playwright** + **TypeScript**
* **Page Object Model (POM)**
* Optional: Percy for visual regression testing
* Docker-ready (`Dockerfile` included)

---

## 🔧 .NET SDK Setup (Optional Integration)

If your project integrates with backend systems or test orchestration built on .NET (e.g., APIs, custom tools, CI hooks):

### ✅ Install .NET SDK

1. Go to [.NET SDK Downloads](https://dotnet.microsoft.com/download)
2. Choose the latest **.NET 8 SDK** (or the version your project requires)
3. Install via command line:

**macOS/Linux**

```bash
wget https://dotnet.microsoft.com/path-to-sdk-installer.sh -O install.sh
chmod +x install.sh
./install.sh
```

**Windows (PowerShell)**

```powershell
winget install Microsoft.DotNet.SDK.8
```

### ✅ Verify Installation

```bash
dotnet --version
```

### 🧪 Create and Run Sample .NET App (Optional)

```bash
dotnet new console -o SampleApp
cd SampleApp
dotnet run
```

---

## 🐳 Docker Support

This repo includes a Dockerfile for containerized test execution.

### Build the Image

```bash
docker build -t playwright-tests .
```

### Run Tests in Container

```bash
docker run --rm playwright-tests
```

---

## 🧼 Miscellaneous

```bash
# Clean test artifacts
rm -rf test-results/

# Update Playwright Browsers
npx playwright install
```

---

## 🔒 License

This project is for internal/demo purposes. No open-source license attached.

```

---

Let me know if you want to add **.NET project references**, **API integration tests**, or **CI pipeline steps using .NET CLI** (e.g., in Azure DevOps or GitHub Actions).
```
