export type PortfolioItem = {
  image: string;
  title: string;
  description: string;
  swatch: string;
  category: string;
  /** optional object-position override — for photos where the default
   *  center crop lands on something distracting (a fixture, a cable) */
  position?: string;
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
      {
        image: "/images/chair-antique-brocade.jpg",
        title: "Antique brocade armchairs",
        description: "A pair of carved wood armchairs re-dressed in a pale damask brocade, set by a sunlit window.",
        swatch: "#d7d3c0",
        category: "Chairs",
      },
      {
        image: "/images/chair-barstools-white.jpg",
        title: "Kitchen island barstools",
        description: "A set of counter-height barstools re-covered in white performance leather for a busy family kitchen.",
        swatch: "#e9e7e2",
        category: "Chairs",
      },
    ],
  },
  {
    id: "beds",
    label: "Beds & Headboards",
    items: [
      {
        image: "/images/hero-beige-bed-cropped.jpg",
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
  {
    id: "commercial",
    label: "Commercial",
    items: [
      {
        image: "/images/commercial-booth-red-vinyl.jpg",
        title: "Restaurant booths",
        description: "Contract-grade booth seating built for a full service, night after night.",
        swatch: "#7a2020",
        category: "Commercial",
      },
      {
        image: "/images/banquette-pink-tufted.jpg",
        title: "Custom tufted banquette",
        description: "A blush channel-tufted banquette, built to the exact run of the room.",
        swatch: "#d9b8b4",
        category: "Commercial",
      },
      {
        image: "/images/banquette-curved-gold-trim.jpg",
        title: "Curved banquette, gold trim",
        description: "Curved commercial seating with a brass nailhead trim, built for a hospitality interior.",
        swatch: "#b79a5c",
        category: "Commercial",
      },
      {
        image: "/images/commercial-lounge-orange.jpg",
        title: "Lounge seating",
        description: "Contract-grade lounge seating in a durable orange vinyl, built for daily use.",
        swatch: "#c2531f",
        category: "Commercial",
      },
      {
        image: "/images/bench-green-leather-retail.jpg",
        title: "Retail bench seating",
        description: "Long-run bench seating in green leatherette, built for a retail fitting area.",
        swatch: "#3f5c44",
        category: "Commercial",
      },
    ],
  },
];

export const beforeAfter = [
  {
    id: "houndstooth-armchair",
    before: "/images/ba-houndstooth-chair-before.jpg",
    after: "/images/ba-houndstooth-chair-after.jpg",
    title: "Houndstooth armchair",
    description: "A tired houndstooth accent chair, stripped and rebuilt in soft ivory boucle.",
  },
  {
    id: "oval-back-dining-chairs",
    before: "/images/ba-dining-chairs-before.jpg",
    after: "/images/ba-dining-chairs-after.jpg",
    title: "Oval-back dining chairs",
    description: "Torn dining chairs re-framed in black lacquer and re-covered in boucle.",
  },
  {
    id: "gilt-frame-armchair",
    before: "/images/ba-gold-rococo-chair-before.jpg",
    after: "/images/ba-gold-rococo-chair-after.jpg",
    title: "Gilt-frame armchair",
    description: "A carved gold-leaf frame, re-dressed in fresh champagne velvet — the frame was worth keeping.",
  },
  {
    id: "entryway-bench",
    before: "/images/ba-wood-bench-before.jpg",
    after: "/images/ba-wood-bench-after.jpg",
    title: "Entryway bench",
    description: "A cracked vinyl-top bench brought back with a new leather top, grain and all.",
  },
];
