const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Health check endpoint for Render
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Routes
const routes = require("./routes");
app.use("/api", routes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server is running on PORT ${PORT}`);
});