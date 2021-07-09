import MeetUpItem from './MeetUp';

const MeetupList = ({ meetups }) => {
  return (
    <div className="center">
      {meetups.map(({ id, image, title, address }) => (
        <MeetUpItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
        />
      ))}
    </div>
  );
};

export default MeetupList;
