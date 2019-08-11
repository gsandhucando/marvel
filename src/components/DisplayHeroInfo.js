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
      <div className='displayhero-div'>
        <h1>{name}</h1>
        <div className='display-description'>
        <p>{description}</p>
        </div>
        <div className='display-stories'>
        <h3>Stories</h3>
        {storyCollection}
        </div>
      </div>
    </div>
    </div>
  );
};

export default DisplayHeroInfo;
