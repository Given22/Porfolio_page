import React from "react";

import Links from "../../links/Links";
import ContactLinks from "../../contactLinks/ContactLinks";

import "./Contact.scss";

export default function Contact({ links, refLink, theme, InViewport }) {
  return (
    <section ref={refLink} id="Contact" className={theme}>
      <Links links={links} theme={theme} isInViewport={InViewport} />
      <ContactLinks links={links} theme={theme} isInViewport={InViewport} />
      <p className="copyright">© 2022 Damian Sroczyński All Rights Reserved</p>
    </section>
  );
}
