import React from "react";

import Layout from "../layouts/index";

class Index extends React.Component {
  render() {
    // _.map([1, 2, 3], console.log);
    return (
      <Layout>
        <h1 className="tu">Hi sassy friends</h1>
        <div className="sass-nav-example">
          <h2>Nav example</h2>
          <ul className="pa0 ma0 list">
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Store</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Help</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Logout</a>
            </li>
            <li>
              <a href="https://github.com/yjacobowitz/GatsbyWithLodash">
                Code for site on GitHub
              </a>
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Index;
