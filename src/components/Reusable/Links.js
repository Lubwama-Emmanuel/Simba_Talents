const links = [
  {
    id: 1,
    item: "Home",
    link: "#home",
  },
  {
    id: 2,
    item: "Services",
    link: "#services",
  },
  {
    id: 3,
    item: "About Us",
    link: "#about",
  },
  {
    id: 4,
    item: "Careers",
    link: "#careers",
  },
  {
    id: 5,
    item: "Contact Us",
    link: "#contact",
  },
];

// Separator component
export default function Links({ linksStyle, linkStyle }) {
  return (
    <ul className={linksStyle}>
      {links.map((el) => (
        <Link key={el.id} item={el.item} linksStyle={linkStyle} />
      ))}
    </ul>
  );
}

function Link({ item, linkStyle }) {
  return <li className={linkStyle}>{item}</li>;
}
