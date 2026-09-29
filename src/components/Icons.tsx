import { BedDouble, ChefHat, Leaf, Mountain, Sun, TentTree } from "lucide-react";
import type { Resort } from "@/data/resorts";

export function FeatureIcon({ icon, size = 25 }: { icon: Resort["features"][number]["icon"]; size?: number }) {
  const props = { size, strokeWidth: 1.35 };
  if (icon === "mountain") return <Mountain {...props} />;
  if (icon === "bed") return <BedDouble {...props} />;
  if (icon === "food") return <ChefHat {...props} />;
  if (icon === "ger") return <TentTree {...props} />;
  if (icon === "leaf") return <Leaf {...props} />;
  return <Sun {...props} />;
}
