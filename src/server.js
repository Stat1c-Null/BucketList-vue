const express = require('express');
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3000', 'http://127.0.0.1:8080'],
  credentials: true
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  console.log('Request body:', req.body)
  next()
})

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
      `INSERT INTO Users (email, password) VALUES (?, ?)`, [email, encryptedPassword],
      function(error) {
        if(error) {
          if(error.code == 'SQLITE_CONSTRAINT_UNIQUE') {
            return response.status(400).json({message: 'Email already exists'})
          }
          return response.status(500).json({message: "Database error"})
        }
        return response.status(200).json({message: "User created successfully"})
      }
    )
  } catch (error) {
    response.status(500).json({message: "Internal server error"})
  }
})

app.post('/api/login', (request, response) => {
  const { email, password } = request.body;
  db.get('SELECT * FROM Users WHERE email = ?', [email], 
    function(error, user) {
      if(error) {
        return response.status(500).json({message: "Server error"})
      }
      if(!user) {
        return response.status(404).json({message: "User not found"})
      }
      try {
        const validatePassword = bcrypt.compare(password, user.password);

        if(!validatePassword) {
          return response.status(401).json({message:"Invalid password"})
        }

        response.json({message: "Login succesful", userId: user.id, email: user.email})
      } catch (error) {
        response.status(500).json({message: 'Internal server error'})
      }
    })
})

//Get all the users
app.get('/api/users', (request, response) => {
  db.all('SELECT id, email FROM Users', [] , (error, rows) => {
    if(error) {
      return response.status(500).json({message: "Server error"})
    }
    response.json(rows)
  })
})

//Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running")
})