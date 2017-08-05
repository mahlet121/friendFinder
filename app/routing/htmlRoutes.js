
var path = require("path");


module.exports = function(app) {
      // when the url in /survey connect to survey.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    //use home html as default page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};