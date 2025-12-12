import { redirect } from "next/navigation";

export default function Home() {
  // server-side redirect to the About page
  redirect("/about");
}
