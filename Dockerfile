# Base image with Node and Playwright dependencies
FROM mcr.microsoft.com/playwright:v1.52.0-jammy

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

RUN npx playwright install --with-deps


# Run the test command with Percy when the container starts
CMD ["npx", "percy", "exec", "--", "npx", "playwright", "test"]

