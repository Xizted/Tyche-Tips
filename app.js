const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const appRoutes = require("./routes/app");
const loginRoutes = require("./routes/login");

app.use("/login", loginRoutes);
app.use("/", appRoutes);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"));
