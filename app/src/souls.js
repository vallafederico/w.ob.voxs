///////////////////////////
const addons = [
  {
    // ++++++++ add ons
    symbol: "Raised Middle Finger",
    great: "Taking on challenges",
    strengths: {
      content:
        "The fiery Maverick Soul is always center stage. They zig when the world zags, are honest to a fault, and exude self-confidence. Telling a Maverick something can’t be done is a sure way to fire them up to prove otherwise. They are an ambitious Soul, with big dreams and the determination to realize them—no matter who they rub the wrong way.",
      list: "Independent, Confident, Determined",
    },
    weaknesses: {
      content:
        "The Maverick’s drive and self-assuredness means they can find it difficult to admit when they are wrong or hasty. When backed into a corner, The Maverick doubles down on a “it’s my way or the highway” mentality and can come across as:",
      list: "Domineering, Egotistical, Jealous",
    },
    friend:
      "The Maverick Soul steps to their own beat. It’s faint and hard to follow, but The Trickster has found the rhythm and is glad to dance along. The Maverick’s free spirit and The Trickster’s pranks land them in dangerous situations often, which only adds to their fun. And The Wanderer isn’t about to miss all this adventure. After all, a prison cell is something to see, if only momentarily.",
    clashes:
      "The Maverick’s got places to go and people to see, and The Hermit, well, doesn’t… The Maverick gave up on trying to drag them along. After all, The Maverick doesn’t like being told what to do, so it’s not their place. Because of this, The Maverick can’t stomach The Warrior and all of their orders. The Maverick ditches chumps like that. The Maverick thinks that Hunters could be decent company… if they’d cease stopping every five minutes to set a trap. Mavericks don’t have time for that.",
    quirks: [
      "Smirks a thousand times a day just for the exercise",
      "Is the reason why certain laws were made",
      "Overuses the word, 'antiestablishmentarianism'",
      "Will ask for suggestions just to do the opposite",
      "Always has a leather jacket and a pair of sunglasses on standby",
      "Has a superpower for starting catchphrases",
    ],
  },
];

/*
Order: 

Artisan
Hermit
Hunter
Leader

*/

export const SLIDER_CONTENT = {
  SOULS: [
    {
      title: "Artisan",
      content:
        "The passionate creativity of an Artisan Soul can rarely be contained. You are the master of your craft, however strange or silly that craft may be. A voice deep inside cries out, “Hey you! Make something fabulous!” and you obey with heartfelt discipline.",
      stats: [
        { title: "Wit", value: "1" },
        { title: "Smarts", value: "1" },
        { title: "Swagger", value: "1" },
      ],
      adds: addons[0],
    },
    {
      title: "Hermit",
      content:
        "The Hermit Soul is capable, rugged and mysterious. You love the wilderness and you’re always bragging about all the different things you could eat to survive. You’re happy with just the clothes on your back, but you may secretly yearn for a place of your own, where you could rock peacefully on a decadent-yet-simple spruce porch, sipping the last of your morning coffee while yelling at neighbor children to get off your lawn.",
      stats: [
        { title: "Might", value: "1" },
        { title: "Endurance", value: "2" },
      ],
      adds: addons[0],
    },
    {
      title: "Hunter",
      content:
        "The resolute and watchful Hunter Soul is always on its toes. You are wild at heart and strange instincts allow you to react quickly to dangerous situations, like being attacked by a snake, but also mundane situations, like avoiding the stream of a lawn sprinkler. You see the clues that everyone else misses. You try to tell them, but they’ve already moved onto something else, and then it’s this whole big thing, so you just give up. Yeah, you’re good.",
      stats: [
        { title: "Agility", value: "1" },
        { title: "Endurance", value: "1" },
      ],
      adds: addons[0],
    },
    {
      title: "Leader",
      content:
        "The Leader Soul is confident and tenacious, one who seeks total mastery of both inner and outer strength. Known for taking situations by the reins and making things happen (often with extreme results), you have the respect of both friends and foes. If you get a plan of action in your head, chances are you’ll have people following you and shouting (possibly with pitchforks and torches) within the hour.",
      stats: [
        { title: "Might", value: "2" },
        { title: "Swagger", value: "2" },
      ],
      adds: addons[0],
    },
    // First Row
    {
      title: "Maverick",
      content:
        "Unafraid to stray from the beaten path, The Maverick Soul charts their own course. Their confidence and determination rallies The Maverick as they climb the greatest peaks and plunge to unfathomable depths in their quest to explore what lies beyond where others fear to tread. When faced with opposition, The Maverick raises their middle finger high and ventures on. Armed with cunning wit and stylish flair, no challenge… and no one can stand in their way.",
      stats: [
        { title: "Swagger", value: "1" },
        { title: "Agility", value: "2" },
      ],
      adds: addons[0],
    },
    {
      title: "Sage",
      content:
        "The Sage Soul is seeker of the highest whys, protector of the greatest ifs, and bringer of the most incredible don’tchaknows. You hold an intense desire to impart all your sagely wisdom on anyone and anything with ears.",
      stats: [{ title: "Wit", value: "3" }],
      adds: addons[0],
    },
    {
      title: "Star",
      content:
        "The Star Soul can walk into a room full of strangers and walk out with new best friends. You are admired, loved and envied by pretty much everyone, which sometimes puts you into awkward situations. One time you were out to slay a dragon and it was so charmed that it wanted to be your friend instead of fight. So you slayed it later when it wasn’t looking.",
      stats: [{ title: "Swagger", value: "3" }],
      adds: addons[0],
    },
    {
      title: "Scholar",
      content:
        "The Scholar Soul is an inquisitive know-it-all who is good with facts: Such as the 17 uses of dragon scales, how to defeat a monster with saltwater taffy, and whether Minotaurs really sleep standing up. You know the useful stuff, and you know that knowledge is power. You’re a real hit at parties.",
      stats: [{ title: "Smarts", value: "3" }],
      adds: addons[0],
    },

    //  Second Row End
    {
      title: "Trickster",
      content:
        "The Trickster Soul can writhe, wiggle and weasel outta the worst situations with only their wiles. There are three things you always have up your sleeve: A well-timed joke (both clean and dirty versions), a scrap of juicy gossip, and another card whose details are a secret even to this omniscient narrative description. You’re good at lots of stuff.",
      stats: [{ title: "All Stats", value: "1" }],
      adds: addons[0],
    },
    {
      title: "Healer",
      content:
        "The Healer Soul can fix anything from broken bones to burned bridges (the metaphorical kind, not real bridges).You’re the resilient, level-headed and patient shoulder to cry on. You are driven to care for others, and you have a real knack for it. ",
      stats: [
        { title: "Wit", value: "2" },
        { title: "Endurance", value: "1" },
      ],
      adds: addons[0],
    },
    {
      title: "Wanderer",
      content:
        "The Wanderer Soul is always curious about new experiences, eager for the next great adventure. You are curious, adaptable and spontaneous. You can’t wait to explore the entire world and see what’s around the next corner, but you sometimes forget to look both ways when you cross the busy city streets. Be careful with that. If you find treasure it will probably be because you tripped and stumbled into it accidentally.",
      stats: [
        { title: "Smarts", value: "1" },
        { title: "Agility", value: "1" },
        { title: "Endurance", value: "1" },
      ],
      adds: addons[0],
    },
    {
      title: "Warrior",
      content:
        "The Warrior Soul lives by rules of nobility, honor, and honorable nobility so true and righteous that for a non-Warrior Soul to even hear them would mean most certain death. If you are a Warrior Soul, you’ll know the gig. Headstrong, steadfast, and loyal. You’ll probably live and die by your own iron will.",
      stats: [{ title: "Might", value: "3" }],
      adds: addons[0],
    },
  ],
};

/**


Artisan
Sage
Scholar
Warrior
Star
Maverick
Healer
Hermit
Leader
Wanderer
Hunter
Trickster


 */
