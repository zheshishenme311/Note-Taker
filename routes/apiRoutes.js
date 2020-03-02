
var fs = require('fs');
var path = require("path");
var uuidv4 = require("uuid/v4")
var db = require("../db/db.json");

module.exports = function(app) {

    db.arr = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

    app.get('/api/notes', function(req, res) {
        
         res.json(db.arr);
    });

    
    app.post('/api/notes', function(req,res){
        let note = { 
            id : uuidv4(),
            title: req.body.title,
            text: req.body.text
        };
     
      db.arr.push(note);
      fs.writeFile('./db/db.json', JSON.stringify(db.arr), function(err){
        if(err){
            
        }else{
            res.send(note)
        }
      });
    });

    app.delete('/api/notes/:id', function(req, res){
        var id = req.params.id;
        db.arr = removeObjFromArray(db.arr, "id", id);
        fs.writeFileSync("./db/db.json", JSON.stringify(db.arr) , function (err) {
            if (err) throw err;  
         });
        res.send("");
            
    });

    function removeObjFromArray (arrList, prop, val){
        
        
        function check(element) {
            return element[prop] != val;
        }
    
        return arrList.filter(check);
    
    };

    
    
    
};