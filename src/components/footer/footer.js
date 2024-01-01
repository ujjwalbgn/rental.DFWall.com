import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen border-t-2 pb-20 text-[#3a6066]">
        <div className=" text-center"> 
          <p className="font-bold">Contact</p>
          <p className="text-sm">Email : dfwall@gmail.com</p>
          <p className="text-sm">
            Phone : <a href="tel:4692982709">(469) 298-2709</a>
          </p>
        </div>

      <div className=" text-center font-medium text-xs pt-10">
        {`© ${new Date().getFullYear()}`} Dfw All |{" "}
        <Link href="/privacy">Privacy Policy</Link>
        <p>
          Powered by{" "}
          <a href="https://codemero.com" target="_blank">
            CodeMero
          </a>
        </p>
      </div>
    </footer>
  );
}
