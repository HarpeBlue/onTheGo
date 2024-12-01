import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import validation from "utils/validation";

const Contact = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLayoutContact {
        edges {
          node {
            id
            heading
            description {
              description
            }
            image {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);

  const content = data.allContentfulLayoutContact.edges.find(
    edge => edge.node.id === contentModuleId
  );

  useEffect(() => {
    validation.init();
  }, []);

  return (
    <section id="contact" className="contact container section mx-auto">
      <div className="contact__content">
        <h2
          className="section__title"
          data-sal="fade"
          data-sal-easing="ease-in-cubic"
        >
          {content.node.heading}
        </h2>
        <p
          className="mb-4 w-full md:w-3/4"
          data-sal="slide-up"
          data-sal-easing="ease-in-cubic"
        >
          {content.node.description.description}
        </p>
        <form
          id="contact_form"
          className="w-full md:w-3/4"
          noValidate
          data-sal="slide-up"
          data-sal-easing="ease-in-cubic"
          data-sal-delay="100"
        >
          {/* <div className="input-group mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="input" name="name" />
          </div>
          <div className="input-group mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="input" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="h-20" name="message"></textarea>
          </div> */}
        </form>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDr9EWjb1PfGnZyo_Y5uLqDkromdcS5g6OD4rGVQDDOhwQgw/viewform?usp=sf_link" target="_blank">
          <button type="submit" className="btn btn--primary mt-8">
            Contáctanos
          </button>
        </a>
      </div>
      <div className="contact__image">
        <div
          className="mx-auto"
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="500"
        >
          <div className="contact__image-wrap">
            <Img fluid={content.node.image.fluid} alt="Contact" />
            <p className="contact__image-text">Reclama tu kit de bienvenida!!!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default Contact;
