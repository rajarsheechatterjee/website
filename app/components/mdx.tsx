import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th
      key={index}
      className="border-b border-neutral-200 px-3 py-2 text-left font-medium text-neutral-900 dark:border-neutral-800 dark:text-neutral-100"
    >
      {header}
    </th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr
      key={index}
      className="border-b border-neutral-100 last:border-0 dark:border-neutral-900"
    >
      {row.map((cell, cellIndex) => (
        <td
          key={cellIndex}
          className="px-3 py-2 align-top text-neutral-800 dark:text-neutral-200"
        >
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <thead className="bg-neutral-50 dark:bg-neutral-900">
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(`h${level}`, { id: slug }, [
      React.createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: "anchor",
      }),
      children,
    ]);
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
