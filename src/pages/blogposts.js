import React from 'react';
import { Link, graphql } from 'gatsby';
import { SEO } from '../components';

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <div>
      <SEO title="Blog posts" />
      <h1>Here is a list of all blogposts!</h1>
      <div className="blogposts">
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  );
};

export default BlogPosts;
export const query = graphql`
  query BlogPostsPage {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
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
    }
  }
`;
