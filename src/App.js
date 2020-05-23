import React, { useState } from "react";
import { connect } from "react-redux";
import { shortenURL } from "./actions/actions";

const App = ({ shortenURL }) => {
  const [url, setURL] = useState("");

  return (
    <div>
      <h1>App</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setURL(e.target.value)}
        placeholder="Enter A URL To Shorten"
      />
      <button onClick={() => shortenURL(url)}>Shorten URL</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { shortenURL })(App);
