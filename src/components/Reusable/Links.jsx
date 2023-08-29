import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    item: "Home",
    link: "/",
  },
  {
    id: 2,
    item: "Services",
    link: "/services",
  },
  {
    id: 3,
    item: "About Us",
    link: "/about",
  },
  {
    id: 4,
    item: "Careers",
    link: "/careers",
  },
  {
    id: 5,
    item: "Contact Us",
    link: "/contact",
  },
];

// Separator component
export default function Links({ linksStyle, linkStyle }) {
  return (
    <ul className={linksStyle}>
      {links.map((el) => (
        <Link el={el} linkStyle={linkStyle} />
      ))}
    </ul>
  );
}

function Link({ el, linkStyle }) {
  return (
    <li>
      <NavLink to={el.link} className={linkStyle}>
        {el.item}
      </NavLink>
    </li>
  );
}
