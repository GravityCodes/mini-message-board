const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

//routers
const indexRouter = require('./routes/indexRouter');

//asset path
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//view engine
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');


app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));