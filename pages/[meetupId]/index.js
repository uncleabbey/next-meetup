/* eslint-disable @next/next/no-img-element */
import { ObjectId } from 'mongodb';
import Head from 'next/head';
import React from 'react';
import connectDb from '../../utils/connectDb';

const dummy = {
  id: 'm1',
  image: 'https://picsum.photos/1000/500',
  address: 'Some Address 10, 12345, Some City',
  title: 'A First Meet Up',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perferendis explicabo at repellendus ducimus qui sed vero amet velit numquam.',
};

const Details = ({ meetup: { title, description, image, address } }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/mdoc/image/upload/v1625841541/favicon_m9ysly.ico"
          type="image/x-icon"
        />
        <meta name="description" content={description} />
      </Head>
      <div className="card text-center col-8 m-auto">
        <img src={image} alt={title} className="card-img" />
        <h1>{title}</h1>
        <p>{description}</p>
        <address>{address}</address>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const { meetupCollection, client } = await connectDb();
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  const { meetupCollection, client } = await connectDb();
  const id = new ObjectId(meetupId);
  const meetup = await meetupCollection.findOne({ _id: id });

  client.close();
  return {
    props: {
      meetup: { ...meetup, _id: meetup._id.toString() },
    },
    revalidate: 10,
  };
}

export default Details;
