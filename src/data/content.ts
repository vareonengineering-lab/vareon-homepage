import { Cog, Zap, Droplets, Flame, Ruler, Target, Eye, Gem, type LucideIcon } from "lucide-react";

export const NAV = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const PILLARS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Target, title: "Mission", text: "Deliver efficient, innovative and sustainable building systems that exceed client expectations." },
  { icon: Eye, title: "Vision", text: "To be the most trusted MEPF engineering partner for the buildings that shape our communities." },
  { icon: Gem, title: "Core Values", text: "Integrity, technical excellence, safety, collaboration and accountability on every project." },
];

export const SERVICES: { icon: LucideIcon; title: string; items: string[] }[] = [
  { icon: Cog, title: "Mechanical Engineering", items: ["HVAC Design", "Ventilation Systems", "Air Conditioning", "Chilled Water Systems", "Exhaust Systems"] },
  { icon: Zap, title: "Electrical Engineering", items: ["Power Distribution", "Lighting Design", "Generator Systems", "Solar Integration", "Electrical Load Analysis"] },
  { icon: Droplets, title: "Plumbing Engineering", items: ["Water Supply Systems", "Sanitary Drainage", "Storm Drainage", "Sewage Systems", "Water Storage"] },
  { icon: Flame, title: "Fire Protection", items: ["Sprinkler Systems", "Fire Alarm Systems", "Fire Pumps", "Hydrant Systems", "Fire Safety Compliance"] },
  { icon: Ruler, title: "Other Engineering Services", items: ["Engineering Design", "Construction Supervision", "Quantity Estimates", "As-built Drawings", "Building Permit Plans", "Consultancy"] },
];

export const WHY = [
  "Experienced Engineers", "High Quality Design", "Fast Project Delivery",
  "Cost Efficient Solutions", "Compliance with Engineering Standards", "Customer Focused",
];

export const PROCESS = [
  { title: "Consultation", text: "We define goals, scope and budget." },
  { title: "Site Inspection", text: "We assess site conditions and constraints." },
  { title: "Engineering Design", text: "We develop calculations and drawings." },
  { title: "Client Review", text: "We refine the design with your feedback." },
  { title: "Construction Support", text: "We supervise and answer field queries." },
  { title: "Project Completion", text: "We deliver as-built documents and handover." },
];

// Placeholder projects: replace with real data.
export const PROJECTS = [
  { name: "Harbor Point Office Tower", location: "Cebu City", discipline: "HVAC & Electrical", type: "Commercial", year: 2024 },
  { name: "Northgate Distribution Hub", location: "Mandaue City", discipline: "Fire Protection", type: "Industrial", year: 2024 },
  { name: "Palm Residences", location: "Lapu-Lapu City", discipline: "Plumbing & Sanitary", type: "Residential", year: 2023 },
  { name: "St. Matthew Medical Annex", location: "Talisay City", discipline: "MEPF", type: "Institutional", year: 2023 },
  { name: "Cebu Tech Park Phase 2", location: "Cebu City", discipline: "Power Distribution", type: "Commercial", year: 2022 },
  { name: "Riverside Cold Storage", location: "Danao City", discipline: "Chilled Water Systems", type: "Industrial", year: 2022 },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Engineering Disciplines" },
  { value: 100, suffix: "%", label: "Commitment" },
];

// Placeholder testimonials: replace with real client feedback.
export const TESTIMONIALS = [
  { quote: "VAREON delivered a clean, well-coordinated MEPF package that went through permitting without a single revision.", name: "Project Manager", role: "Commercial Developer" },
  { quote: "Their site inspections and design reviews saved us weeks during construction. Responsive and thorough.", name: "Facilities Director", role: "Institutional Client" },
  { quote: "Cost-efficient designs that never compromised on code compliance. We now bring them into every new project.", name: "Operations Head", role: "Industrial Client" },
];

export const CONTACT = {
  phone: "+63 000 000 0000",
  email: "info@vareon.example",
  address: "Office Address, Cebu City, Philippines",
};
