import Link from "next/link";

const MenuSidebar = () => {
  return (
    <Link href={"#"} className="hover:bg-gray-300 border border-black">
      <h1>Menu1</h1>
    </Link>
  );
};

export default MenuSidebar;
