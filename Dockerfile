# Use the Node.js base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files (including the `src` folder and `database`)
COPY . .

EXPOSE 3000

# Start the application
CMD ["npm", "start"]