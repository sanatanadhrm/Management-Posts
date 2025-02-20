import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

// Konfigurasi Swagger
const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Management Posts API",
      version: "1.0.0",
      description: "Dokumentasi API untuk manajemen posting media sosial",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
  },
  apis: ["./src/interfaces/http/api/**/routes.ts"], // Sesuaikan dengan lokasi file route
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger Docs tersedia di http://localhost:3000/api-docs");
};

export default swaggerDocs;
