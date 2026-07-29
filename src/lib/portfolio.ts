export type PortfolioItem = {
  image: string;
  title: string;
  description: string;
  swatch: string;
  category: string;
};

export const portfolioCategories: { id: string; label: string; items: PortfolioItem[] }[] = [
  {
    id: "sofas",
    label: "Sofas & Sectionals",
    items: [
      {
        image: "/images/sofa-bright-living-room.jpg",
        title: "Living-room sectional",
        description: "Full sectional re-covered in a hard-wearing performance weave, built for everyday family use.",
        swatch: "#d8d0c2",
        category: "Sofas & Sectionals",
      },
      {
        image: "/images/sofa-family-room-sectional.jpg",
        title: "Family-room sectional",
        description: "New foam, new fabric, same well-loved frame — refreshed for another decade of movie nights.",
        swatch: "#cfc6b6",
        category: "Sofas & Sectionals",
      },
      {
        image: "/images/sofa-modular-taupe.jpg",
        title: "Modular lounge sectional",
        description: "Deep-seat modular piece rebuilt with high-density foam for a firmer, longer-lasting sit.",
        swatch: "#8a7f6f",
        category: "Sofas & Sectionals",
      },
      {
        image: "/images/sofa-gray-sectional-corner.jpg",
        title: "Corner sectional, custom build",
        description: "Built to the room's exact corner — squared arms, boxed cushions, a clean architectural line.",
        swatch: "#a9a9a2",
        category: "Sofas & Sectionals",
      },
    ],
  },
  {
    id: "chairs",
    label: "Chairs",
    items: [
      {
        image: "/images/hero-boucle-chairs.jpg",
        title: "Boucle accent pair",
        description: "A pair of low armchairs finished in ivory boucle, ready for a sunroom corner.",
        swatch: "#e7e2d6",
        category: "Chairs",
      },
      {
        image: "/images/chair-wingback-burgundy.jpg",
        title: "Antique wingback",
        description: "Carved mahogany wingback stripped back to the frame and re-dressed in mustard velvet.",
        swatch: "#c8912c",
        category: "Chairs",
      },
      {
        image: "/images/chair-wingback-ottoman-showroom.jpg",
        title: "Wingback & ottoman set",
        description: "A matching chair-and-ottoman set in a soft taupe velvet, for a reading nook.",
        swatch: "#b7a58c",
        category: "Chairs",
      },
      {
        image: "/images/chair-dining-navy-velvet.jpg",
        title: "Dining chairs, set of four",
        description: "Curved-back dining chairs in a deep navy velvet, built for a round table.",
        swatch: "#2f3d55",
        category: "Chairs",
      },
      {
        image: "/images/chair-dining-glass-table.jpg",
        title: "Dining chairs, set of four",
        description: "Simple parsons-style dining chairs re-covered in a warm grey chenille.",
        swatch: "#b9b2a4",
        category: "Chairs",
      },
      {
        image: "/images/chair-boucle-swivel-pair.jpg",
        title: "Swivel chair pair",
        description: "Curved swivel chairs finished in cream boucle for a living room refresh.",
        swatch: "#e5e0d2",
        category: "Chairs",
      },
    ],
  },
  {
    id: "beds",
    label: "Beds & Headboards",
    items: [
      {
        image: "/images/bed-beige-tufted-panel.jpg",
        title: "Channel-tufted panel bed",
        description: "A wall-to-wall channel-tufted headboard, upholstered to fit the room exactly.",
        swatch: "#cabfa8",
        category: "Beds & Headboards",
      },
      {
        image: "/images/bed-charcoal-chesterfield.jpg",
        title: "Chesterfield bed frame",
        description: "Deep-buttoned chesterfield-style bed in charcoal velvet, built from the ground up.",
        swatch: "#4a4d52",
        category: "Beds & Headboards",
      },
      {
        image: "/images/bed-blue-tufted-nightstand.jpg",
        title: "Tufted headboard & floating nightstand",
        description: "Soft dove-blue tufted headboard paired with a custom floating nightstand.",
        swatch: "#b9c2c4",
        category: "Beds & Headboards",
      },
    ],
  },
  {
    id: "banquettes",
    label: "Benches & Banquettes",
    items: [
      {
        image: "/images/banquette-built-in-green.jpg",
        title: "Built-in breakfast nook",
        description: "Channel-tufted banquette built into an existing shelving nook, in a durable olive weave.",
        swatch: "#7c8a5e",
        category: "Benches & Banquettes",
      },
      {
        image: "/images/bench-green-leather-retail.jpg",
        title: "Retail bench seating",
        description: "Long-run bench seating in green leatherette, built for a retail fitting area.",
        swatch: "#3f5c44",
        category: "Benches & Banquettes",
      },
      {
        image: "/images/chaise-blue-patterned.jpg",
        title: "Patterned bedroom bench",
        description: "A small bedroom bench dressed in a hand-block patterned cotton.",
        swatch: "#6d7c88",
        category: "Benches & Banquettes",
      },
    ],
  },
  {
    id: "ottomans",
    label: "Ottomans",
    items: [
      {
        image: "/images/ottoman-boucle-stacked.jpg",
        title: "Stacked drum ottoman",
        description: "A sculptural stacked ottoman in ivory boucle — equal parts side table and footstool.",
        swatch: "#e6e2d6",
        category: "Ottomans",
      },
      {
        image: "/images/showroom-mustard-chair-poufs.jpg",
        title: "Tweed pouf pair",
        description: "A pair of low poufs in a flecked tweed, styled for a salon-style waiting area.",
        swatch: "#a9967f",
        category: "Ottomans",
      },
    ],
  },
];

export const beforeAfter = [
  {
    image: "/images/ba-houndstooth-chair.jpg",
    title: "Houndstooth armchair",
    description: "A tired houndstooth accent chair, stripped and rebuilt in soft ivory boucle.",
  },
  {
    image: "/images/ba-dining-chairs.jpg",
    title: "Oval-back dining chairs",
    description: "Torn dining chairs re-framed in black lacquer and re-covered in boucle.",
  },
  {
    image: "/images/ba-gold-rococo-chair.jpg",
    title: "Gilt-frame armchair",
    description: "A carved gold-leaf frame, re-dressed in fresh champagne velvet — the frame was worth keeping.",
  },
  {
    image: "/images/ba-wood-bench.jpg",
    title: "Entryway bench",
    description: "A cracked vinyl-top bench brought back with a new leather top, grain and all.",
  },
];
