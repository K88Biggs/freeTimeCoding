# Base image with Node and Playwright dependencies
<<<<<<< HEAD
FROM mcr.microsoft.com/playwright:v1.52.0-jammy
=======
FROM mcr.microsoft.com/playwright:v1.53.0-jammy
>>>>>>> 7fe4b1c4dbaa1d24ba115e0f033ba1301e42cbc6

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

<<<<<<< HEAD
RUN npx playwright install --with-deps


# Run the test command with Percy when the container starts
CMD ["npx", "percy", "exec", "--", "npx", "playwright", "test"]

=======
# Run the Percy test (you can override this in docker run)
CMD ["npx", "percy", "exec", "--", "npx", "playwright", "test"]
>>>>>>> 7fe4b1c4dbaa1d24ba115e0f033ba1301e42cbc6
