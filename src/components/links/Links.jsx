import React from "react";
import { Icon } from "@iconify/react";

import "./links.scss";

export default function Links({links}) {
  return (
    <div id="Links">
      {links && (
        <>
          <div className="link">
            <a href={links.linkedin } className="links_link">
              <Icon icon="akar-icons:linkedin-fill" height="24" />
            </a>
          </div>
          <div className="link">
            <a href={links.github} className="links_link">
              <Icon icon="uim:github-alt" height="24" />
            </a>
          </div>
          <div className="link">
            <a href={'mailto:' + links.mail} className="links_link">
              <Icon icon="fluent:mail-28-filled" height="24" />
            </a>
          </div>
        </>
      )}
    </div>
  );
}
