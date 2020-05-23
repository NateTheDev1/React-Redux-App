import React, { useState } from "react";
import { connect } from "react-redux";
import { shortenURL } from "../actions/actions";

const URLForm = ({ shortenURL, error, fetching, url }) => {
  const [curURL, setURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrevURL(curURL);
    setURL("");
    shortenURL(curURL);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={curURL}
          onChange={(e) => setURL(e.target.value)}
          placeholder="Enter A URL To Shorten"
        />
        <button type="submit" className="btn-shorten">
          Shorten URL
        </button>
      </form>
      <h2>Your Original URL:</h2>
      <p>{prevURL}</p>
      <h2>Your Shortened URL:</h2>
      <p className="shortened">{url}</p>
      <p>{error}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    url: state.url,
    error: state.error,
  };
};

export default connect(mapStateToProps, { shortenURL })(URLForm);
