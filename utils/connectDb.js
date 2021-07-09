import { MongoClient } from 'mongodb';

const connectDb = async () => {
  // password L78eYGkZwxmHsB!
  const dbUrl =
    'mongodb+srv://gabkay007:L78eYGkZwxmHsB!@cluster0.xdpao.mongodb.net/meetups?retryWrites=true&w=majority';
  const client = await MongoClient.connect(dbUrl, {
    useUnifiedTopology: true,
  });
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  return { meetupCollection, client };
};

export default connectDb;
