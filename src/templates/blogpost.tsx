import React, { ReactNode } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { BlogPageQuery } from '../../graphql-types';

interface BlogPostProps {
  data: BlogPageQuery;
}

const BlogPost = ({ data }: BlogPostProps): ReactNode => {
  const { title, body, image } = data.contentfulBlogPost;
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />
        <p className="body-text">{body.body}</p>
        <Link to="/blogposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
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
