var express = require("express");
var path = require("path");
var open = require("open");
import webpack from "webpack";
import config from "../webpack.config.dev";

<<<<<<< HEAD
/* eslint-disable no-console */

=======
>>>>>>> 146a97c7378a6e4b9a0ad066e81456f82153b25e
var port = 3000;
var app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err){
    if (err){
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 146a97c7378a6e4b9a0ad066e81456f82153b25e
