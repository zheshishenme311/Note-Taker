var db = require('../db/db.json');
var fs = require('fs');

module.exports = function(app) {

    app.get('/api/notes', function(req, res) {
        res.json(db);
    });

    
    app.post('/api/notes', function(req,res){
     db.push(req.body)
      fs.writeFile('../db/db.json', JSON.stringify(db), function(err){
        if(err){
            console.log(err)
        }else{
            res.send('ok')
        }
      });
    });

    app.delete('/api/notes/:id', function(req, res){
        
        
        

        

        
        
    })
    
    

    





};