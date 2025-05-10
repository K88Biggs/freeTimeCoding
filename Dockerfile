# Base image with Node and Playwright dependencies
<<<<<<< HEAD

FROM mcr.microsoft.com/playwright:v1.52.0-jammy
=======
FROM mcr.microsoft.com/playwright:v1.52.0-jammy

>>>>>>> fa1def9 (Updated Dockerfile and .env)

# Set working directory
WORKDIR /playwright-ts-scaffold

# Copy dependency files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Run the Percy test (you can override this in docker run)
CMD ["npx", "percy", "exec", "--", "npx", "playwright", "test"]

