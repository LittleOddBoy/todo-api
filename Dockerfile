FROM node:22.14.0-alpine

WORKDIR /app

# Install pnpm globally
RUN npm i -g pnpm

# Copy package.json and lock files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
RUN pnpm build

# Set command to start the app
CMD ["node", "dist/index.js"]