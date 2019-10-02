import React, { Component } from "react";
import { Link } from "gatsby";
import "./BlogLogo.css";

class BlogLogo extends Component {
  render() {
    const { logo, url, title } = this.props;
    if (logo) {blog-logo
      return (
        <Link className="blog-logo" to={url || "/"}>
          {/* style={{ boxShadow: "none" }}> */}
          <img src={logo} alt={title} />
        </Link>
      );
    }else{
      return (
      <Link className="blog-logo" to={url || "/"}>
      <h5>Openbracket</h5>
      </Link>
      )
    }
  }
}

export default BlogLogo;
