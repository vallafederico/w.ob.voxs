import indexcss from "../styles/index.css";

import Nav from "~/c/Nav";
import Main from "~/c/sh/Main";
import Wrapper from "~/c/sh/Wrapper";
import Section from "~/c/sh/Section";
import Cont from "~/c/sh/Cont";

export const links = () => [{ rel: "stylesheet", href: indexcss }];

export default function Index() {
  return (
    <Wrapper>
      <Nav />
      <Main>
        <Section className="Hero h-screen">
          <Cont></Cont>
        </Section>
        <Section className="Scroll ">
          <Cont></Cont>
        </Section>
        <Section className="Slider ">
          <Cont></Cont>
        </Section>
        <Section className="Info ">
          <Cont></Cont>
        </Section>
        <Section className="Footer ">
          <Cont></Cont>
        </Section>
      </Main>
    </Wrapper>
  );
}
