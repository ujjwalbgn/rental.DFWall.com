import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen px-6 sm:px-8 lg:px-16 mx-auto border-t-2 pb-20 text-center">
      <p className="text-[#d86c9e] mt-4">
        ©{new Date().getFullYear()} - DFWAll | All Rights Reserved ®️
      </p>

      <div className=" text-center font-medium text-xs mt-1">
        <p className="text-[#969e48]">
          Powered by{" "}
          <a href="https://codemero.com" target="_blank">
            CodeMero
          </a>
        </p>
      </div>
    </footer>
  );
}
