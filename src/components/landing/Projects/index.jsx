import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Project} from 'components/common';
import { Wrapper, Grid} from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 30, privacy: PUBLIC, isFork: false, isLocked: false, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  homepageUrl
                  licenseInfo{
                    name
                  }
                  releases(first: 1)
                  {
                    nodes{
                      name
                      publishedAt
                    }

                  }
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id,
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <p>
      Here are some of my public Github projects:
      </p>
      <Grid>
        {edges.map(({ node }) => (
          Project(node)
        ))}
      </Grid>
    </Wrapper>
  );
};
