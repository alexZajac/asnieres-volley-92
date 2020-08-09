import React from 'react';
import { Link } from 'gatsby';
import { Image, SEO, Container } from '../components';

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <div className="home">
      <h1>Hello There</h1>
      <p>Welcome my awesome blog</p>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: '0 auto 1.45rem',
          }}
        >
          <Image />
        </div>
      </div>
      <Link to="/blogposts/">View all posts</Link>
    </div>
  </Container>
);
export default IndexPage;
