var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// TODO:
// This is copied from works.js but node doesn't support ES6 imports yet

const slugs = [
  "/",
  "/boomsaas",
  "/certsimple",
  "/mycognition",
  "/waves",
  "/online-wednesday",
  "/firework",
  "/uncompromise",
  "/bazaarvoice-tips",
  "/facebook-ratings-and-reviews",
  "/facebook-stories",
  "/social-deployer",
  "/bazaarvoice-questions-and-answers",
  "/pamplemousse-js",
  "/ginjs",
  "/google-android-4-launch",
  "/agave-js",
  "/youtube-world-view",
  "/google-getting-american-business-online",
  "/google-10th-birthday-germany",
  "/im-everyone",
  "/python-docx",
  "/linux-and-python",
  "/feature-writer-apc-magazine",
  "/doom-the-path",
];

var log = console.log.bind(console);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const STATIC_DIR = path.join(__dirname, "public");

log(`STATIC_DIR is: ${STATIC_DIR}`);

app.use(express.static(STATIC_DIR));

// Show SPA for all known pagess
app.use(slugs, function (req, res, next) {
  res.render("index", { title: "Portfolio" });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
