import React from "react";
import { Icon } from "@iconify/react";

import "./links.scss";

export default function Links({ links }) {
  console.log(links);
  return (
    <div id="Links">
      {links && (
        <>
          <div className="link">
            <a href={links[0].linkedin} className="links_link">
              <Icon icon="akar-icons:linkedin-fill" height="24" />
            </a>
          </div>
          <div className="link">
            <a
              href={links[0].github}
              target="_blank"
              rel="noopener noreferrer"
              className="links_link"
            >
              <Icon icon="uim:github-alt" height="24" />
            </a>
          </div>
          <div className="link">
            <a
              href={"mailto:" + links[0].mail}
              target="_blank"
              rel="noopener noreferrer"
              className="links_link"
            >
              <Icon icon="fluent:mail-28-filled" height="24" />
            </a>
          </div>
        </>
      )}
    </div>
  );
}
