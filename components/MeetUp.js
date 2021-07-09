import Link from 'next/link';

const MeetUpItem = ({ id, image, title, address }) => {
  return (
    <div className="meetup-item">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" />
      <h3 className="m-4">{title}</h3>
      <p className="m-4">{address}</p>
      <p className="m-4 p-4">
        <Link passHref href={`/${id}`}>
          <button className="btn-details">Show Details</button>
        </Link>
      </p>
    </div>
  );
};

export default MeetUpItem;
