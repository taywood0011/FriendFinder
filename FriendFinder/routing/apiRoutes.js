const friends = require("../data/friends");

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
        const UserScores = userInfo.scores;

        let comparison;

        


    })
}