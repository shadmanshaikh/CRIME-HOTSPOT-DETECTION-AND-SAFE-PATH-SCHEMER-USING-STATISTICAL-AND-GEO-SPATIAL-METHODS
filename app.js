

const path = require("path");
const express = require("express");
const ejs = require("ejs");
// const brain = require("brain.js");

// initiate express app
const app = express();

// config express app
app.set("view engine", "ejs"); // express app uses ejs as view engine
app.set("views", path.join(__dirname, "views")); // express app uses ejs files in "views" folder to render html
app.use('/', express.static("public", { maxAge: 10000 })); // express app serves static files (css, js...) in "public" folder
// to include the stylesheet at public/css/style.css, we use  <link rel="stylesheet" href="/css/style.css">
// to include the script at public/script/script.js, we use <script src="/script/script.js"></script>

app.get('/', function (req, res) {
    res.render("index"); // the index.ejs file in "views" folder is used to render
});
// app.get('/file', function(req, res) {
// 	const filePath = path.join("login");
// 	res.sendFile(filePath);
//   });

app.get("/file", function(req, res){
	res.render("login");
});
// app.get("/", function(req, res){
// 	res.render("index");
// });
// app.use("/static", express.static('./static/'));
app.get("/login", function(req, res){
	res.render("login");
});
app.get("/signup", function(req, res){
		res.render("signup");
});
app.post("/signup", function(req, res){
	res.redirect("/maps");
});
app.post("/login", function(req, res){
	res.redirect("/maps");
});
app.get("/maps", function(req, res){
	res.sendFile(path.join(__dirname + '/MapAndLoc.html'));
});

app.get("/report", function(req, res){
	res.sendFile(path.join(__dirname + '/report.html'));
});
app.get("/brain.js", function(req, res){
	res.sendFile(path.join(__dirname + '/brain.js'));
});
app.get('/heatmap', function(req, res) {
	res.sendFile('http://localhost:8501/')
  });

// ----------------handle API-------------------------//
app.get('/ping', function(req, res) {
   // test route, 
  res.send("Hello from express");
});

// catch all route to render the 404 page if the route is not defined 

// app.use(function(req, res, next){
//   res.sendFile(path.join(__dirname, "public","404.html"));   
// })

app.listen(5000, function () { console.log("Server is listening on port 5000") });