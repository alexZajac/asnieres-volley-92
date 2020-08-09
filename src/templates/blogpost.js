import React from 'react';
import { Link, graphql } from 'gatsby';
import { SEO } from '../components';

const BlogPost = ({ data }) => {
  const { title, body, image } = data.contentfulBlogPost;
  return (
    <div>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />
        <p className="body-text">{body.body}</p>
        <Link to="/blogposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};
export default BlogPost;
export const pageQuery = graphql`
  query BlogPage($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      image {
        file {
          url
        }
      }
    }
  }
`;
