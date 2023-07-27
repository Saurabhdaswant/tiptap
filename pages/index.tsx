import { Inter } from "next/font/google";
import Tiptap from "@/components/TipTap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Tiptap />;
}
