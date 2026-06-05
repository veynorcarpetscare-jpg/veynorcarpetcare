import type { GalleryProject } from "@/lib/types";

export const galleryProjects: GalleryProject[] = [
  {
    id: "east-bay-sectional-restoration",
    title: "Sectional Upholstery Deep Cleaning",
    city: "East Bay Home",
    result: "Visible staining lifted across the sectional.",
    description:
      "This sectional had dark body-oil buildup, food and drink spotting, and uneven wear across the main seating areas. The finished result shows a cleaner, more even surface from multiple angles.",
    beforeImages: [
      {
        src: "/gallery/sectional-living-room-before-1.jpg",
        alt: "Before upholstery cleaning on a brown sectional seat with visible dark staining",
      },
      {
        src: "/gallery/sectional-living-room-before-2.jpg",
        alt: "Before upholstery cleaning showing dark rings and staining across a sectional cushion",
      },
      {
        src: "/gallery/sectional-living-room-before-3.jpg",
        alt: "Before upholstery cleaning on a sectional chaise with heavy visible staining",
      },
    ],
    afterImages: [
      {
        src: "/gallery/sectional-living-room-after-1.jpg",
        alt: "After upholstery cleaning showing a cleaner sectional from a wide room angle",
      },
      {
        src: "/gallery/sectional-living-room-after-2.jpg",
        alt: "After upholstery cleaning showing the main sectional seat area cleaned and brightened",
      },
      {
        src: "/gallery/sectional-living-room-after-3.jpg",
        alt: "After upholstery cleaning showing the sectional corner and chaise restored",
      },
    ],
  },
  {
    id: "east-bay-hall-carpet",
    title: "Hall Carpet Traffic and Edge Cleanup",
    city: "East Bay Home",
    result: "Traffic dullness and corner darkening reduced.",
    description:
      "This carpet detail shows a common problem area near a doorway and wall edge where soil builds up faster than the rest of the room. The after photo gives the space a brighter, more maintained look.",
    beforeImages: [
      {
        src: "/gallery/hall-carpet-before.jpg",
        alt: "Before carpet cleaning in a hallway corner with visible dark traffic and edge soil",
      },
    ],
    afterImages: [
      {
        src: "/gallery/hall-carpet-after.jpg",
        alt: "After carpet cleaning in a hallway corner with the traffic area visibly improved",
      },
    ],
  },
  {
    id: "east-bay-sofa-base-detail",
    title: "Sofa Base Detail Spot Removal",
    city: "East Bay Home",
    result: "Lower upholstery panel cleaned and brightened.",
    description:
      "A smaller upholstery detail can still stand out to the customer when it sits at eye level every day. This close-up pair shows targeted treatment on a darker lower sofa panel.",
    beforeImages: [
      {
        src: "/gallery/sofa-base-before.jpg",
        alt: "Before upholstery cleaning on a light sofa base with a dark visible stain",
      },
    ],
    afterImages: [
      {
        src: "/gallery/sofa-base-after.jpg",
        alt: "After upholstery cleaning on a light sofa base with the dark stain removed",
      },
    ],
  },
];
