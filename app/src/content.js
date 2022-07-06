/**
 * Imports
 */
import cta_vox_img_1 from "./img/vox-img-1.png";
import cta_vox_img_2 from "./img/vox-img-2.png";
import API_soul_img from "./img/soul_img.png";
import { SLIDER_CONTENT } from "./souls.js";

/**
 * Section 2 -- TextBoxes
 */

export const TEXTBOXES = [
  {
    head: "VOX SOULS",
    subHead: "WHAT ARE VOX SOULS?",
    text: "If there’s one great mystery in all the universes, metaverses, and multiverses, it’s the living Soul. A Soul shapes your VOX’s personality. It changes who your VOX is, what drives them, and how they approach adventures. Some VOX are book smart. Others are full of swagger and sass. Maybe your VOX is leading the charge in battle, or prefers a battle of wits. Who will you be?",
  },
  {
    head: "BOOST STATS AND DEFI",
    subHead: "WHY DO YOU NEED A SOUL?",
    text: "There are endless possibilities in the metaverse. VOX owners with Souls will enjoy benefits to both gameplay and future DeFi. Collect a soul to play up the unique strengths of your VOX in games like VOX Odyssey and the VOXverse while gaining access to potential DeFi rewards. There are 12 Souls. Who will you be?",
  },
];

/**
 * Section 4 -- Cta
 */

export const CTACONTENT = {
  title: "Souls Mint Opens Soon",
  text: "Every VOX has it’s own soul. All souls are different and unique to the VOX they belong to.",
  imgs: [
    { src: cta_vox_img_1, alt: "The Mage Vox" },
    { src: cta_vox_img_2, alt: "The Wanderer Vox" },
  ],
};

/**
 * Fake API
 */

const API_SOUL = {
  tokenId: "Soul Name",
  image: API_soul_img,
  hasSoul: false,
  number: 19862,
  soul: {
    image: "string",
    name: "string",
  },
};

const FAKE_API = [];

for (let i = 0; i < 30; i++) {
  FAKE_API.push(API_SOUL);
}

export { FAKE_API };

/**
 * Section 3 -- Slider
 */
export { SLIDER_CONTENT };
