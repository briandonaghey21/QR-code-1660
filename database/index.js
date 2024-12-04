const express = require('express');
const cors = require('cors');
const db = require('./firebase'); // Import the Firestore instance
const admin = require('firebase-admin'); // Import Firebase Admin SDK

const app = express();
const port = process.env.PORT || 8080;

// Enable CORS for all origins
app.use(cors());

app.use(express.json());

// Route to write data to Firestore
app.post('/data/:collection', async (req, res) => {
  const { collection } = req.params;
  const { className, name } = req.body; // No renaming needed

  // Validate required fields
  if (!className || !name) {
    return res.status(400).json({ 
      error: 'Missing required fields', 
      missingFields: { className: !className, name: !name } 
    });
  }

  try {
    // Create a new document in Firestore with the provided data
    const docRef = await db.collection(collection).add({
      className: className, // Saves as className in Firestore
      name: name,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(201).json({ 
      message: 'Document successfully added', 
      id: docRef.id 
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to write data to Firestore', 
      details: error.message 
    });
  }
});

// Route to read all data from database
app.get('/data/:collection/all', async (req, res) => {
  const { collection } = req.params;
  try {
    const snapshot = await db.collection(collection).get();
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch all data', details: error.message });
  }
});


// Route to read data from database by class name
app.get('/data/:collection/class/:className', async (req, res) => {
  const { collection, className } = req.params;
  try {
    const snapshot = await db.collection(collection)
      .where('class', '==', className)
      .get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'No matching documents found' });
    }

    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data by class name', details: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

