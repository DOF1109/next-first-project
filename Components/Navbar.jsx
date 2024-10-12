import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-500 mb-4 flex justify-between items-center px-20 py-4 font-bold">
      <Link href="/">Home</Link>

      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
