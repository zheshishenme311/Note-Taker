# Note-Taker

* GET `/notes` - return the `notes.html` file.

  * GET `*` - return the `index.html` file

* The application have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* API routes have been created:

  * GET `/api/notes` - read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - recieve a query paramter containing the id of a note to delete. 
  
