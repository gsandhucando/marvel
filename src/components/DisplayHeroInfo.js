import React from "react";

const DisplayHeroInfo = ({ name, thumbnail, stories, description }) => {
  const storyCollection = stories.items.map(story => {
    return <p key={story.name}>{story.name}</p>;
  });
  return (
    <div
      style={{
        backgroundImage: `url("${thumbnail.path}.${thumbnail.extension}")`,
        height: "100vh",
        backgroundPosition: 'center'
      }}
    >
      <div>
      <div style={{zIndex: 9, color: 'white', textAlign: 'center', fontWeight: 'bold', lineHeight: '2em'}}>
        <h1>{name}</h1>
        <p>{description}</p>
        <h3>Stories</h3>
        {storyCollection}
      </div>
    </div>
    </div>
  );
};

export default DisplayHeroInfo;
