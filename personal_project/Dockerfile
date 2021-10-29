FROM node:current-alpine
WORKDIR .
COPY package*.json ./
RUN npm install
COPY . .

CMD npm run dev