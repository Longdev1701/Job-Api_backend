const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Jobs API',
    version: '1.0.0',
    description: 'Jobs API documentation',
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
}

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // nơi đặt routes
}

module.exports = swaggerJSDoc(options)
