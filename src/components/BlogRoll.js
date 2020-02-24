import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

import { StyledCard } from "../styles/components";
import { Button } from "../styles/components";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <StyledCard key={post.id}>
              <div className="header-post">
                <div className="avatar">
                  <img src="../img/blog-radius.png" />
                </div>
                <div className="col-cell">
                  <div className="eb-post-author">
                    <span>
                      <Link to="/">PSL Corp</Link>
                    </span>
                  </div>
                  <div className="eb-post-date text-muted">
                    <time className="eb-meta-date">
                      {post.frontmatter.date}
                    </time>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  className="title"
                  to={post.fields.slug}
                >
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`
                      }}
                    />
                  </div>
                ) : null}
              </div>
              <p className="body">
                {post.excerpt}
                <br />
                <br />
                <Link to={post.fields.slug}>
                  <Button type="outline" className="btn btn-primary">Keep Reading →</Button>
                </Link>
              </p>
            </StyledCard>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
