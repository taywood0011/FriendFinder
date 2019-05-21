const friends = require("../app/data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends)
    });

    app.post("/api/friends", function(req, res){
        const myMatch = {
            name: "",
            photo: "",
            comparison: Number
        };

        const userInfo = req.body;
        const userSurvery = userInfo.scores;

        let comparison;

        for (var i = 0; i < friends.length; i++) {
            const Friend = friends[i];
            comparison = 0;
      
           
            for (var a = 0; a < Friend.scores.length; a++) {
              const friendScore = Friend.scores[a];
              const UserScores = userSurvery[a];
      
              
              comparison += Math.abs(parseInt(UserScores) - parseInt(friendScore));
            }
      
         
            if (comparison <= myMatch.friendCompare) {
             
              myMatch.name = Friend.name;
              myMatch.photo = Friend.photo;
              myMatch.friendCompare = comparison;
            }
          }
      
         
          friends.push(userInfo);
      
          
          res.json(myMatch);
        });
      };

        


