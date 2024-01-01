import { Inter } from "next/font/google";
import NavigationBar from "../navigationBar/navigationBar";
import Footer from "../footer/footer";
import SeoHead from "../SeoHead";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div
      className={`flex min-h-screen flex-col overflow-hidden  ${inter.className}`}
    >
      <SeoHead />
      <NavigationBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer className="absolute" />
    </div>
  );
}
