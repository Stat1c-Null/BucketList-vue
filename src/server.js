const express = require('express');
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

app.use(cors)
app.use(express.json())

//Initialize database
const db = new sqlite3.Database('../database.db', (error) => {
  if(error) {
    console.log("Error opening database: ", error.message)
  } else {
    console.log("Succesfully connected")
  }
})

//Sign up endpoint
app.post('/api/signup', async (request, response) => {
  try {
    const { email, password } = request.body;

    //Encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    db.run(
      `INSERT INTO Users (email, password) VALUES (?, ?)`, [email, encryptedPassword]
    )
  } catch (error) {
    
  }
})

//Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server is running")
})