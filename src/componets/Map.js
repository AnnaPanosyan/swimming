import React from "react";
import Iframe from "react-iframe";

const Map = () => (
  <Iframe
    frameborder="0"
    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.719564989474!2d8.160203715639168!3d51.59170287964912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bbd7c24b53be57%3A0xde7424cacdaba738!2sINI%20School%20Bad%20Sassendorf!5e0!3m2!1sru!2s!4v1674579371593!5m2!1sru!2s"
    width="250"
    height="150"
    allowfullscreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

export default Map;
