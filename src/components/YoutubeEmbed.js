import React from 'react'

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width= "90%"
        // height="280"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  
  // YoutubeEmbed.propTypes = {
  //   embedId: PropTypes.string.isRequired
  // };
  
  export default YoutubeEmbed;