import Link from "next/link";

export default function DropdownMenu(props) {

    const { children, menuData, type } = props;

    return (
        <div className="menu-dropdown-wrapper">
            {children}
            <div className={`menu-dropdown menu-dropdown__${type}`}>
                {menuData.map((menuColumn, index) => {
                    return (
                        <nav className="subMenu" key={index}>
                            <h4 className="subMenu__heading">{menuColumn.heading}</h4>
                            <ul className="subMenu__list">
                                {menuColumn.menuItems.map((menuItem, index) => {
                                    return (
                                        <li className="subMenu__list-item" key={index}>
                                            <Link href={menuItem.url || "#"}>
                                                <a href="#">
                                                    {menuItem.title}
                                                </a>
                                            </Link>
                                        </li>
                                    );
                                })
                                }
                            </ul>
                        </nav>
                    );
                })}
            </div>
        </div >
    );
}