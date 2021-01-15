import React, { forwardRef, Fragment } from "react";
import { Link as GatsbyLink } from "gatsby";
import { useDocs, useCurrentDoc } from "docz";
import { get } from "lodash/fp";

const getHeadings = (route, docs) => {
  const doc = docs.find((doc) => doc.route === route);
  const headings = get("headings", doc);

  return headings ? headings.filter((heading) => heading.depth === 2) : [];
};

const getCurrentHash = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location ? decodeURI(window.location.hash) : "";
};

const Link = forwardRef(({ item, ...props }, ref) => {
  const docs = useDocs();
  const current = useCurrentDoc();

  const to = item.route;
  const headings = docs && getHeadings(to, docs);
  const isCurrent = item.route === current.route;
  const showHeadings = isCurrent && headings && headings.length > 0;
  const currentHash = getCurrentHash();

  if (item.hidden) {
    return null;
  }

  return (
    <Fragment>
      <GatsbyLink {...props} to={to} activeClassName="active" ref={ref} />

      {showHeadings &&
        headings.map((heading) => (
          <GatsbyLink
            key={heading.slug}
            to={`${to}#${heading.slug}`}
            className={currentHash === `#${heading.slug}` ? "active" : ""}
          >
            {heading.value}
          </GatsbyLink>
        ))}
    </Fragment>
  );
});

export default Link;
