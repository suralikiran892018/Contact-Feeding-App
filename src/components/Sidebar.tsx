import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Contacts",
    link: "/contacts",
  },
  {
    id: 2,
    name: "Charts and Maps",
    link: "/",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div
      className="lg:w-[250px] w-full bg-gray-300 lg:h-screen h-[76px] flex lg:flex-col flex-row justify-center items-center gap-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 199, 255, 1) 10.8%, rgb(228, 224, 224) 10.8%)",
      }}
    >
      {menuItems.map((item: any) => (
        <Link key={item?.id} to={item?.link}>
          <p
            className={`lg:text-lg font-medium cursor-pointer uppercase tracking-widest lg:w-[140px] ${
              pathname === item?.link ? "text-black" : ""
            }`}
          >
            {item?.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
