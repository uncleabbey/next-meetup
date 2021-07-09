import connectDb from '../../utils/connectDb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { meetupCollection, client } = await connectDb();
    const data = req.body;
    const result = await meetupCollection.insertOne(data);
    client.close();

    return res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
