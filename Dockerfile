# FROM node:20-alpine AS build

# WORKDIR /app

# COPY package*.json ./

# RUN npm install && npm cache clean --force

# COPY . .

# RUN npm run build --prod

# FROM nginx:alpine

# COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
