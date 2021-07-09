// navigates to our-domain/
import MeetupList from '../components/MeetupList';
import Head from 'next/head';
import { Fragment } from 'react';
import connectDb from '../utils/connectDb';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/mdoc/image/upload/v1625841541/favicon_m9ysly.ico"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Browse a huge list of highly active Meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   // have access to req & res
//   // const {req, res} = context
//   return {
//     props: {
//       meetups: dummy,
//     },
//   };
// }
export async function getStaticProps() {
  const { meetupCollection, client } = await connectDb();
  const data = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: data.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
