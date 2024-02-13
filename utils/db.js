import mongodb from 'mongodb';

class DBClient {
  constructor() {
    const {
      DB_HOST: host = 'localhost',
      DB_PORT: port = 27017,
      DB_DATABASE: database = 'files_manager',
    } = process.env;

    const uri = `mongodb://${host}:${port}/${database}`;
    this.client = new mongodb.MongoClient(uri, { useUnifiedTopology: true });
    this.client.connect((err) => {
      if (err) {
        console.error('DB connection error:', err.message);
      } else {
        console.log('DB connected successfully');
      }
    });
  }

  isAlive() {
    return !!this.client && this.client.isConnected();
  }

  async nbUsers() {
    const usersCollection = this.client.db().collection('users');
    const usersCount = await usersCollection.countDocuments();
    return usersCount;
  }

  async nbFiles() {
    const filesCollection = this.client.db().collection('files');
    const filesCount = await filesCollection.countDocuments();
    return filesCount;
  }
}

const dbClient = new DBClient();

export default dbClient;
