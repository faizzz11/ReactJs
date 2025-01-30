import React from 'react';

const Card = (props) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 sm:w-full p-4"> {/* Ensures side-by-side layout */}
      <div className="bg-gray-100 p-6 rounded-lg h-100">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://thumbs.dreamstime.com/b/close-up-monkey-s-face-82728331.jpg"
          alt="content"
        />
        <h2 className="tracking-widest text-yellow-500 text-xs font-medium title-font">
          UID: {props.UID}
        </h2>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4 line-clamp-2">
          {props.heading}
        </h2>
        <p className="leading-relaxed text-base text-black line-clamp-3">{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
