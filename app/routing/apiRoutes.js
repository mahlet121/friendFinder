//hold the array from friends.js
var friendsData = require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        //variable to to grab new coming data
        var userData = req.body;
        //To carry data after Math.abs
        var arrayTotal = [];
        // Total result of result
        var total = 0;
        //Array to carry total result of friendsData
        var newArray = [];

        for (var i = 0; i < friendsData.length; i++) {
            for (j = 0; j < friendsData[i].scores.length; j++) {
                var dataOne = friendsData[i].scores[j];
                var dataTwo = userData.scores[j];
                //calculating absolute value of the differences            
                var result = Math.abs(parseInt(dataOne) - parseInt(dataTwo));
                total += result;
            }


            arrayTotal.push({
                total: total,
                name: friendsData[i].name,
                photo: friendsData[i].photo
            });
            newArray.push(total);
            total = 0;
        }
        //calculating the minimum result to get the smallest difference
        var small = Math.min.apply(null, newArray);
        for (var i = 0; i < arrayTotal.length; i++) {
            if (small === arrayTotal[i].total) {
                friendsData.push(userData);
                return res.json(arrayTotal[i]);
            }
        }

    });

};