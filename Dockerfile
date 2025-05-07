# Base image with Node and Playwright dependencies
FROM mcr.microsoft.com/playwright:v1.43.1-jammy

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Run the Percy test (you can override this in docker run)
CMD ["npx", "percy", "exec", "--", "npx", "playwright", "test"]
