import React from "react";

const BlogSection = () => {
  const peopleData = [
    {
      name: "Heeneth sai",
      pic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      email: "john.doe@example.com",
      ext: "1234",
      kind: "Marketing",
      cards: ["Software Development", "CEO"],
    },
    {
      name: "Khushi Bansali",
      pic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      email: "john.doe@example.com",
      ext: "1234",
      kind: "Marketing",
      cards: ["Software Development", "Graphic Design"],
    },
    {
      name: "Nithin",
      pic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      email: "john.doe@example.com",
      ext: "1234",
      kind: "Marketing",
      cards: ["Software Development", "Graphic Design"],
    },
    {
      name: "Kumar",
      pic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      email: "john.doe@example.com",
      ext: "1234",
      kind: "Marketing",
      cards: ["Software Development", "Graphic Design"],
    },
    // Add more data objects for other people
  ];

  return (
    <div className="community-page bg-gray-100 py-16">
      <h1 className="text-3xl font-bold pb-8 text-center">
        Welcome to Our Community!
      </h1>
      <p className="text-gray-700 text-center pb-8">
        Connect with fellow members to share knowledge, collaborate, and grow.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
        {peopleData.map((person, index) => (
          <div
            key={index}
            className="grid-item bg-white shadow-md rounded-md p-4"
          >
            <img
              src={person.pic}
              alt={`${person.name}'s profile picture`}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-center">{person.name}</h3>
            <p className="text-gray-600 text-center mb-4">
              <span>{person.email}</span> | <span>{person.ext}</span> |{" "}
              <span>{person.kind}</span>
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {person.cards.map((card, cardIndex) => (
                <span
                  key={cardIndex}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Join our community
        </button>
        <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-md ml-4">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
