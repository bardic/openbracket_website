import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import AuthorImage from "../components/AuthorImage/AuthorImage";
import AuthorProfile from "../components/AuthorProfile/AuthorProfile";
import AuthorName from "../components/AuthorName/AuthorName";
import AuthorBio from "../components/AuthorBio/AuthorBio";
import AuthorMeta from "../components/AuthorMeta/AuthorMeta";
import AuthorLocation from "../components/AuthorLocation/AuthorLocation";
import AuthorWebsite from "../components/AuthorWebsite/AuthorWebsite";
import AuthorStats from "../components/AuthorStats/AuthorStats";
import Footer from "../components/Footer/Footer";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import Layout from "../components/layout";

class AuthorTemplate extends React.Component {
  state = {
    menuOpen: false
  };

handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { author } = this.props.pageContext;
    const postEdges =
      this.props.data.allMarkdownRemark &&
      this.props.data.allMarkdownRemark.edges
        ? this.props.data.allMarkdownRemark.edges
        : [];
    const authorsEdges =
      this.props.data.allAuthorsJson && this.props.data.allAuthorsJson.edges
        ? this.props.data.allAuthorsJson.edges
        : [];
   // const getAuthor = () => authorsEdges[0].node;

    return (
      <div/>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AuthorPage($author: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $author } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            author
          }
        }
      }
    }
    allAuthorsJson(filter: { uid: { eq: $author } }) {
      edges {
        node {
          uid
          name
          image
          url
          bio
          location
          socialUrls
        }
      }
    }
  }
`;

export default AuthorTemplate;
