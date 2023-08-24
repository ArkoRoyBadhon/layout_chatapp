import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Message from "@/components/Message";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Message />
      </div>
    </>
  );
}
