var express = require("express");
var fs = require("fs")
var app = express();
var PORT = process.env.PORT || 8080;
var path = require("path");
var savedNotes = require("./db.json");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));



console.log(savedNotes);

// HTML Routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });


// API Routes
app.get("/api/notes", function(req, res) {
    fs.readFile(savedNotes, function(err, data){
        if(err){
            return res.send("you made an error")
        }
        const pastNotes = json.parse(data)
        res.json(pastNotes)
})
  });
res.json(savedNotes);
app.post("/api/notes", function(req, res) {
        var newNote = req.body; 
        console.log(newNote);
        fs.writeFile("db.js", newNote + '\n', function(err) {
            if (err) {
              console.log(err);
            }
            else {
              console.log("Commit logged!");
            }
       res.json(newNote)   
          })
          
  });
//   * POST `/api/notes` - Should receive a new note to save on the request body,
// add it to the `db.json` file, and then return the new note to the client.
app.delete("/api/notes/:id", function(req, res){
    fs.readFile(title)
    // Insert corrected savedNotes section.
})

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
// This means you'll need to find a way to give each note a unique `id` when it's saved. 
// In order to delete a note, 
// you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, 
// and then rewrite the notes to the `db.json` file.

app.listen(PORT, function() {
    console.log("localhost:" + PORT);
  });
  