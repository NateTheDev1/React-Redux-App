import React, { useState } from "react";
import { connect } from "react-redux";
import { shortenURL } from "./actions/actions";

const App = ({ shortenURL, error, fetching, url }) => {
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
      <h1>ShortMan</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={curURL}
          onChange={(e) => setURL(e.target.value)}
          placeholder="Enter A URL To Shorten"
        />
        <button type="submit">Shorten URL</button>
      </form>
      <h2>Your Original URL: {prevURL}</h2>
      <h2>Your Shortened URL: {url}</h2>
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

export default connect(mapStateToProps, { shortenURL })(App);
