export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/gorila-node-api',
  mongoTest: 'mongodb://localhost:27017/test',
  port: process.env.port || 5050
}