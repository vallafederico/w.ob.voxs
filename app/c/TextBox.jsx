import { TEXTBOXES } from "~/src/content.js";

export default function TextBoxes() {
  return (
    <div className="TextBoxes flex flex-col">
      {TEXTBOXES.map((box, i) => (
        <TextBox key={i} index={i} content={box} />
      ))}
    </div>
  );
}

function TextBox({ content, index }) {
  return (
    <div
      className={`TextBox p-10 my-10 bg-light rounded-lg md:w-[25vw] ${
        index ? "md:ml-auto" : null
      } `}
    >
      <h2 className="text-red">{content.subHead}</h2>
      <h3 className="font-display font-black text-6xl mb-9">{content.head}</h3>
      <p className="font-light">{content.text}</p>
    </div>
  );
}
