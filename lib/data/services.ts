import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "carpet-cleaning",
    name: "Carpet Cleaning",
    shortDescription:
      "Routine carpet care for traffic lanes, spills, and general refreshes.",
    fullDescription:
      "Our standard carpet cleaning service lifts dirt, oils, and everyday buildup from the fibers that see the most use. It is designed for homes that need a cleaner look, fresher feel, and faster turnaround without overcomplicating the process.",
    bullets: [
      "Living rooms, bedrooms, hallways, stairs, and family rooms",
      "Pre-treatment for traffic lanes and common spots",
      "Low-moisture finishing for quicker dry times",
    ],
  },
  {
    id: "deep-carpet-cleaning",
    name: "Deep Carpet Cleaning",
    shortDescription:
      "Heavier restorative cleaning for neglected, high-use, or move-related jobs.",
    fullDescription:
      "Deep carpet cleaning is the right fit when standard maintenance is not enough. We spend more time on pre-conditioning, agitation, and soil extraction to improve carpets that have pet wear, embedded dirt, or visible dark traffic areas.",
    bullets: [
      "Restorative cleaning for overdue carpets",
      "Better suited for rentals, move-outs, and high-traffic homes",
      "Focused treatment for visibly dark or matted areas",
    ],
  },
  {
    id: "upholstery-cleaning",
    name: "Upholstery Cleaning",
    shortDescription:
      "Professional cleaning for sofas, sectionals, chairs, and fabric seating.",
    fullDescription:
      "Upholstery traps body oils, dust, food residue, and pet hair long before it looks obviously dirty. We clean common household fabrics with methods chosen to brighten the fabric, reduce odor, and leave furniture ready for regular use again.",
    bullets: [
      "Sofas, sectionals, dining chairs, ottomans, and accent chairs",
      "Fabric-safe process with targeted spot treatment",
      "Useful before guests arrive or after pet accidents",
    ],
  },
  {
    id: "pet-stain-removal",
    name: "Pet Stain Removal",
    shortDescription:
      "Targeted treatment for visible pet spots and repeat problem areas.",
    fullDescription:
      "Pet accidents need more than a surface clean. We isolate the affected areas, treat staining, and work to improve the look of recurring spots in carpeted rooms, stairs, and area rugs where pets spend the most time.",
    bullets: [
      "Treatment for isolated spots and recurring accident zones",
      "Useful for both fresh stains and older problem areas",
      "Often paired with odor treatment for better results",
    ],
  },
  {
    id: "pet-odor-treatment",
    name: "Pet Odor Treatment",
    shortDescription:
      "Odor-focused treatment for carpets and soft surfaces affected by pets.",
    fullDescription:
      "Pet odor tends to linger in padding, carpet backing, and upholstery if it is not treated correctly. Our odor treatment targets the affected zones to reduce the smell and leave the room noticeably fresher.",
    bullets: [
      "Focused on rooms with recurring odor complaints",
      "Can be added to carpet, rug, or upholstery service",
      "Ideal before move-outs, guests, or property showings",
    ],
  },
  {
    id: "area-rug-cleaning",
    name: "Area Rug Cleaning",
    shortDescription:
      "Cleaning for household area rugs that need soil and spot removal.",
    fullDescription:
      "Area rugs collect dirt at a different rate than wall-to-wall carpet, especially near entries, under dining tables, and around pets. We clean rugs with a process matched to the material and condition so they look brighter and feel cleaner without unnecessary wear.",
    bullets: [
      "Common household synthetic and wool-blend rugs",
      "Useful for dining areas, living rooms, and bedrooms",
      "Spot treatment included where appropriate",
    ],
  },
  {
    id: "move-cleaning",
    name: "Move-In & Move-Out Cleaning",
    shortDescription:
      "Fast carpet and upholstery cleaning for transitions, listings, and turnovers.",
    fullDescription:
      "Move-related cleaning helps new occupants start fresh and helps outgoing residents leave the space in better condition. We handle occupied homes, vacant rentals, staging prep, and turnover work with scheduling that respects your deadline.",
    bullets: [
      "Useful for renters, homeowners, and property managers",
      "Helps freshen the space before staging or occupancy",
      "Available for vacant or furnished properties",
    ],
  },
  {
    id: "commercial-carpet-cleaning",
    name: "Commercial Carpet Cleaning",
    shortDescription:
      "Carpet cleaning for offices, small commercial spaces, and tenant suites.",
    fullDescription:
      "Commercial carpet cleaning is designed for lobbies, offices, suites, and workspaces that need to stay professional and presentable. We focus on appearance, odor control, and practical scheduling so your business can keep moving.",
    bullets: [
      "Office suites, waiting areas, conference rooms, and tenant spaces",
      "Good fit for recurring maintenance or one-time refreshes",
      "Scheduling available around lower-traffic business hours",
    ],
  },
];

export const featuredServiceIds = [
  "carpet-cleaning",
  "deep-carpet-cleaning",
  "upholstery-cleaning",
  "pet-odor-treatment",
];
