import { redirect } from "next/navigation";
import { sections } from "./features";

export default function page() {
  const firstFeature = Object.keys(sections)[0];
  redirect(`/features/${firstFeature}`);
}
