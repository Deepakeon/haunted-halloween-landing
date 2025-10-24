import { IGuideLine, ITimeline, ITradition } from "./types";

const TimeLine: ITimeline[] = [
  {
    era: "2000 BCE",
    icon: "🔥",
    title: "Celtic Samhain",
    description: "Ancient Celts celebrate Samhain, marking the end of harvest and beginning of winter."
  },
  {
    era: "800s CE",
    icon: "⛪",
    title: "All Hallows' Eve",
    description: "Christianity transforms Samhain into All Hallows' Eve, merging pagan and Christian traditions."
  },
  {
    era: "1800s",
    icon: "🎃",
    title: "American Halloween",
    description: "Irish immigrants bring Halloween traditions to America, popularizing jack-o'-lanterns and trick-or-treating."
  }
];

const Traditions: ITradition[] = [
  {
    icon: "🎃",
    title: "Jack-o'-Lanterns",
    description:
      "Originally carved from turnips in Ireland, pumpkins became the canvas for warding off evil spirits and lighting the way for lost souls.",
  },
  {
    icon: "👻",
    title: "Costumes & Disguises",
    description:
      "Rooted in Celtic tradition, costumes were worn to confuse and hide from wandering spirits on Samhain night.",
  },
  {
    icon: "🍬",
    title: "Trick-or-Treating",
    description:
      "Evolved from 'souling' - medieval practice where poor folk would receive food in exchange for prayers for the dead.",
  },
  {
    icon: "🕯️",
    title: "Candlelight Vigils",
    description:
      "Candles placed in windows guided deceased loved ones home and kept malevolent spirits at bay.",
  },
];

const Guidelines: IGuideLine = {
  dos: [
    {
      title: "Respect Cultural Origins",
      description:
        "Honor the Celtic and Mexican traditions that influenced Halloween and Día de los Muertos.",
      icon: "✨",
    },
    {
      title: "Be Mindful of Costumes",
      description:
        "Avoid cultural appropriation by steering clear of costumes that mock or stereotype cultures, religions, or races.",
      icon: "🎭",
    },
    {
      title: "Practice Safety First",
      description:
        "Use flame-resistant decorations, inspect candy, travel in groups, and ensure visibility with reflective gear.",
      icon: "🛡️",
    },
    {
      title: "Support Local Communities",
      description:
        "Shop from small businesses, participate in neighborhood events, and contribute to community celebrations.",
      icon: "🏘️",
    },
  ],
  donts: [
    {
      title: "Don't Cultural Appropriate",
      description:
        "Avoid wearing sacred symbols, traditional dress, or cultural items as costume accessories without understanding their significance.",
      icon: "⚠️",
    },
    {
      title: "Don't Overwhelm Young Children",
      description:
        "Keep decorations age-appropriate; extreme gore or horror themes can traumatize young trick-or-treaters.",
      icon: "👶",
    },
    {
      title: "Don't Forget Allergies",
      description:
        "Offer non-food treats like stickers or toys for children with food allergies (look for teal pumpkin signs).",
      icon: "🎃",
    },
    {
      title: "Don't Vandalize or Trespass",
      description:
        "Halloween pranks should never involve property damage, trespassing, or actions that harm others.",
      icon: "🚫",
    },
  ],
};

export { Guidelines, TimeLine, Traditions }