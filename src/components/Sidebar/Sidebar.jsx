import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../assets";
import { menuItems } from "../../menus";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();
  const [isHovered, setHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const sidebarRef = useRef(null);
  const submenuRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth < 1024 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSidebarOpen]);

  const toggleSubmenu = (menuName) => {
    console.log("click");
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  const handleSubmenuItemClick = () => {
    setActiveMenu(null);
  };

  const isRouteActive = (route) => pathname === route;

  return (
    <aside
      ref={sidebarRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`sidebar ${isHovered ? "hovered" : ""} ${
        sidebarOpen ? "collapsed expanded expandedSidebar" : ""
      }`}>
      <a href='/'>
        <div className='sidebar-header'>
          <div className='sidebar-logo-icon'>
            <img src={logo} className='h-[47px] object-cover' alt='LOGO' />
          </div>
          <div className='flex flex-col logo-text px-2'>
            <h1 className='text-xl font-semibold'>
              <span className='text-primary-light dark:text-primary-lighter'>
                Dashboard
              </span>
            </h1>
            <span className='whitespace-nowrap capitalize text-xs text-slate-400'>
              simple & customizable
            </span>
          </div>
        </div>
      </a>

      <ul className='sidebar-content'>
        {menuItems.map((category) => (
          <li key={category.category} className='my-3'>
            <span className='sidebar-menu-header'>{category.category}</span>
            <ul>
              {category.items.map((item, i) => {
                const isSubmenuOpen = activeMenu === item.name;
                const isMainRouteActive = isRouteActive(item.route || "");

                // Check if any submenu's route matches the current path
                const isSubmenuRouteActive = item.submenu?.some((sub) =>
                  isRouteActive(sub.route)
                );

                return (
                  <li
                    key={item.name}
                    className='px-[18px]'
                    onClick={() => toggleSubmenu(item.name)}>
                    <Link
                      to={item.route || "#"}
                      className={`sidebar-menu ${
                        isMainRouteActive || isSubmenuRouteActive
                          ? "active"
                          : ""
                      }`}>
                      <span className='sidebar-menu-icon'>
                        <item.icon />
                      </span>
                      <span className='sidebar-menu-text'>{item.name}</span>
                      {item.submenu && (
                        <span className='sidebar-menu-arrow'>
                          {isSubmenuOpen ? <ChevronDown /> : <ChevronRight />}
                        </span>
                      )}
                    </Link>

                    {item.submenu && (
                      <ul
                        key={i}
                        ref={(el) => (submenuRefs.current[item.name] = el)}
                        style={{
                          maxHeight: isSubmenuOpen
                            ? `${
                                submenuRefs.current[item.name]?.scrollHeight
                              }px`
                            : "0px",
                        }}
                        className={`sidebar-submenu ${
                          isSubmenuOpen ? "expanded-submenu" : ""
                        }`}
                        onClick={handleSubmenuItemClick}>
                        {item.submenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              to={sub.route}
                              className={`sidebar-submenu-item ${
                                isRouteActive(sub.route) ? "active" : ""
                              }`}>
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
