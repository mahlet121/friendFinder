// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    var userData = req.body;
    // It will do this by sending out the value "true" have a table
      var arrayTotal=[];
      var total=0;
      var newArray=[];

      for(var i =0;i<friendsData.length;i++){
                            for (j=0;j<friendsData[i].scores.length;j++){
                                  
                            dataOne=friendsData[i].scores[j];
                         
                            dataTwo=userData.scores[j];
                            
       var result = Math.abs(parseInt(dataOne)-parseInt(dataTwo));
                            total+=result;
                            }
              //console.log(friendsData[i].scores);
         
         arrayTotal.push({total:total,name:friendsData[i].name,photo:friendsData[i].photo});
                 newArray.push(total); 
                 total=0;    
       }
            
            console.log(newArray);
 var small=Math.min.apply(null, newArray);
 for(var i=0;i<arrayTotal.length;i++){
 if(small===arrayTotal[i].total){  
      

     friendsData.push(userData);  
     return res.json(arrayTotal[i]);
     console.log(arrayTotal[i]);
    }  
    }         
//totalArray.push({total:total,name:friendData[i].name,photo:friendData[i].photo});
 //  newArray.push(total);
 //  total=0;

 //   }
 //    //console.log(newArray);
 // var small=Math.min.apply(null, newArray);
 // for(var i=0;i<totalArray.length;i++){
 // if(small===totalArray[i].total){  
      

 //     friendData.push(newData);  
 //     return res.json(totalArray[i]);
 //    }
    
 
 // }

 // });
    //   friendsData.push(req.body);
    //   res.json(true);
    // // 
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];
    

    console.log(friendsData);
  });
};
