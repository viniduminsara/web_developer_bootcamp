const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'animalshelter';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the server
client.connect()
  .then(() => {
    console.log('Connected to MongoDB');

    // Insert
    const collection = client.db(dbName).collection('dogs');

    const newDocument = {
        name: 'Browny',
        breed: 'Komanarian',
        age: 3,
        color: 'Brown'
    };

    return collection.insertOne(newDocument);
  })
  .then(result => {
    console.log('Document inserted');

    // Get
    const collection = client.db(dbName).collection('dogs');
    return collection.find({ name: 'Browny' }).toArray();
  })
  .then(docs => {
    console.log('Retrieved documents:', docs);

    // Update
    const collection = client.db(dbName).collection('dogs');
    const filter = { name: 'Browny' };
    const update = { $set: { newKey: 'newValue' } };

    return collection.updateOne(filter, update);
  })
  .then(result => {
    console.log('Document updated');
    
    // Close the connection
    return client.close();
  })
  .then(() => console.log('Connection closed'))
  .catch(err => console.error(err));
