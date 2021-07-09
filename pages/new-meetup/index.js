import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import AddMeetup from '../../components/AddMeetup';

const NewMeetUp = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetUpdata) => {
    console.log(meetUpdata);
    const resp = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetUpdata),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await resp.json();

    console.log(data);
    router.push('/');
  };
  return (
    <>
      <Head>
        <title>Add Meetup</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/mdoc/image/upload/v1625841541/favicon_m9ysly.ico"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Add your meetup and create amazing networking opportunities"
        />
      </Head>
      <AddMeetup onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetUp;
