require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const createHttpTerminator = require("lil-http-terminator");

const Article = require("./models/article");
const articleRouter = require("./routes/articles");

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

// 'on' indicates that the event will be called every time it occurs
db.on("error", (error) => console.log("❌" + error));

// 'once' signifies that the event will be called only once
db.once("open", () => console.log("🎉 Successfully connected to MongoDB"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

const server = app.listen(PORT, HOST, () => {
  console.log(`🚀 Server is running at ${HOST}:${PORT}`);
});

const httpTerminator = createHttpTerminator({ server });

async function shutdown(signalOrEvent) {
  console.log(`\n${signalOrEvent} occured, shutting down...`);
  const { code, message, success, error } = await httpTerminator.terminate();
  console.log(`
  HTTP server closure result:
    Success: ${success}
    Message: ${message}
    Code: ${code}
    Error (if exists): ${error || ""}
  `);
  process.exit(error ? 1 : 0);
}

// Signals
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

// Events
process.on("uncaughtException", shutdown);
process.on("unhandledRejection", shutdown);
