import { TEXTBOXES } from "~/src/content.js";

const textbox3 = {
  head: "THE 12 SOULS",
  subHead: "WHO WILL YOU BE?",
};

export default function TextBoxes() {
  return (
    <div className="TextBoxes flex flex-col mb-[300vh]">
      <TextBox content={TEXTBOXES[0]} index={0}>
        If there’s one great mystery in all the universes, metaverses, and
        multiverses, it’s the living Soul. A Soul shapes your VOX’s personality.
        It changes who your VOX is, what drives them, and how they approach
        adventures. Some VOX are book smart. Others are full of swagger and
        sass. Maybe your VOX is leading the charge in battle, or prefers a
        battle of wits. Who will you be?
      </TextBox>
      <TextBox content={TEXTBOXES[1]} index={1}>
        There are endless possibilities in the metaverse. VOX owners with Souls
        will enjoy benefits to both gameplay and future DeFi. Collect a soul to
        play up the unique strengths of your VOX in games like{" "}
        <i>VOX Odyssey</i> and the <i>VOXverse</i> while gaining access to
        potential DeFi rewards. There are 12 Souls. Who will you be?
      </TextBox>
      {/* <TextBox content={textbox3} index={0}>
        Every single Soul is different. No Soul is better or worse than another.
        It’s all up to how you want to play in VOX Odyssey and who you want to
        become in the VOXverse.
      </TextBox> */}
    </div>
  );
}

function TextBox({ content, index, children }) {
  return (
    <div
      className={`TextBox p-10 my-[10vh] bg-light rounded-lg  md:w-full lg:w-1/3 xl:w-1/4 ${
        index ? "md:ml-auto" : null
      } `}
    >
      <h2 className="text-red">{content.subHead}</h2>
      <h3 className="font-display font-black text-6xl mb-9">{content.head}</h3>
      <p className="font-light">{children}</p>
    </div>
  );
}
