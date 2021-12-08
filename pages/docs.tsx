import React from "react";
import styled from "@emotion/styled";
import Nav from "../shared/nav";
import { getAllDocs, Categories } from "../utils/docs";

export default function DocsHome(props) {
  return (
    <DocsLayout categories={props.categories}>
      <Hero>
        <h1>Documentation</h1>
        {/* TODO: Quick start guide callouts, and graphic */}
      </Hero>

      <DocsContent>
        <div>
          <h2>What is Inngest</h2>
          <p>
            Inngest is a serverless platform for running code in real-time
            whenever things happen in your business. We subscribe to every event
            in your stack, and allow you to run workflows whenever specific
            events are received.
          </p>
          <p>
            Our platform allows you to build your product, ops, and internal
            flows behind a single abstraction: treating anything that happens
            across any service as a single event.
          </p>

          {/* Start building for free callout */}

          <h2>Discover Inngest</h2>

          <Discover>
            <div>
              <div>
                <h3>Getting Started</h3>
                <p>
                  A technical and non-technical introduction to the features of
                  Inngest, how it works, and step-by-step examples to get you
                  running in minutes.
                </p>
              </div>
              <ul>
                <li>
                  <a href="/docs/what-is-inngest">What is Inngest?</a>
                </li>
                <li>
                  <a href="/docs/how-inngest-works">How Inngest works</a>
                </li>
              </ul>
            </div>
          </Discover>
        </div>
      </DocsContent>
    </DocsLayout>
  );
}

export async function getStaticProps() {
  const categories = getAllDocs().categories;
  return { props: { categories } };
}

export const DocsLayout: React.FC<{ categories: Categories }> = ({
  children,
  categories,
}) => {
  console.log("lol", categories);
  return (
    <>
      <Nav />
      <ContentWrapper>
        <Menu>
          {Object.values(categories).map((c) => {
            return <p>{c.title}</p>;
          })}
        </Menu>
        <Inner>{children}</Inner>
      </ContentWrapper>
    </>
  );
};

export const DocsContent = styled.div`
  display: grid;
  max-width: 800px;
  grid-template-columns: 3fr 1fr;

  h2 {
    margin-top: 5rem;
  }

  /* "On this page" */
  h2 + h5 {
    margin-top: 3rem;
  }
`;

const ContentWrapper = styled.div`
  border-top: 1px solid #ffffff19;
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: calc(100vh - 70px);
`;

const Menu = styled.div`
  border-right: 1px solid #ffffff19;
`;

const Inner = styled.div`
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);

  > div {
    padding: 1rem 4rem;
  }
`;

const Hero = styled.div`
  padding: 8vh 4rem 7vh !important;
  background: rgba(255, 255, 255, 0.03);
`;

const Discover = styled.div`
  > div {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 2rem;
  }

  p,
  ul {
    font-size: 14px;
  }

  ul {
    margin-top: 3.5rem;
  }
`;
