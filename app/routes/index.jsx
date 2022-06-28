import indexcss from "../styles/index.css";

import Nav from "~/c/Nav.jsx";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Index() {
  return <Nav />;
}
