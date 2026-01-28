const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const winston = require("winston");

const healthRoutes = require("./routes/health");
const swaggerOptions = require("../../docs/swagger-definition");

const app = express();
const PORT = process.env.APP_PORT || 3000;

// --------------------
// LOGS (Winston)
// --------------------
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "dentaflow-api" },
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

// --------------------
// SWAGGER
// --------------------
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// --------------------
// MIDDLEWARES
// --------------------
app.use(express.json());

// --------------------
// ROUTES
// --------------------
app.use("/api/v1", healthRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Route racine
app.get("/", (req, res) => {
  logger.info("Accès à la racine -> redirection vers /api-docs");
  res.redirect("/api-docs");
});

// --------------------
// START SERVER
// --------------------
app.listen(PORT, () => {
  logger.info(`Serveur DentaFlow démarré sur http://localhost:${PORT}`);
  logger.info(`Documentation API : http://localhost:${PORT}/api-docs`);
});

module.exports = app;
