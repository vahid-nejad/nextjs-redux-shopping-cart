import Link from "next/link";

const AppBar = () => {
  return (
    <ul className="bg-gradient-to-b from-white to-cyan-50 shadow px-1 py-2 flex text-cyan-500 gap-3  ">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/products"}>Proudcts</Link>
      </li>
    </ul>
  );
};

export default AppBar;
