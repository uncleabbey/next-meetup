import React, { useState } from 'react';

const AddMeetup = ({ onAddMeetup }) => {
  const [inputs, setInputs] = useState({
    title: '',
    address: '',
    description: '',
    image: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMeetup(inputs);
  };
  const { address, description, image, title } = inputs;
  return (
    <form onSubmit={handleSubmit} className="col-5 m-auto form">
      <div className="form-group">
        <label htmlFor="">MeetUp Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">MeetUp Image</label>
        <input
          type="text"
          className="form-control"
          name="image"
          value={image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Description</label>
        <textarea
          onChange={handleChange}
          className="form-control"
          name="description"
          value={description}
        ></textarea>
      </div>
      <div className="form-group text-right m-2">
        <button className="btn btn-brown">Add Meetup</button>
      </div>
    </form>
  );
};

export default AddMeetup;
