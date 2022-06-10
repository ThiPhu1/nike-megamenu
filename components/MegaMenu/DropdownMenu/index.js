import Link from "next/link";
import { useState, useEffect } from "react";

export default function DropdownMenu(props) {
    const { children, menuData, type, setBackdropActive, navItemTitle } = props;

    const [navItemActive, setNavItemActive] = useState(false);

    const hasContent = menuData && menuData.length > 0;

    const openDropdown = () => {
        if (type == "navBar" && hasContent) { setBackdropActive(true); }
        setNavItemActive(true);
    }

    const hideDropdown = () => {
        if (type == "navBar" && hasContent) { setBackdropActive(false); }
        setNavItemActive(false);
    }

    return (
        <div
            className={`menu-dropdown-container menu-dropdown-container__${type} ${navItemActive ? "is-active" : ""}`}
            onMouseEnter={openDropdown}
            onMouseLeave={hideDropdown}>
            <Link href="#">
                <a
                    href="#"
                    className={`${type}-nav-item`}
                >
                    {navItemTitle}
                </a>
            </Link>
            {
                hasContent
                    ? <div className="menu-dropdown-wrapper">
                        <div className={`menu-dropdown`}>
                            {menuData.map((menuColumn, index) => {

                                if (menuColumn.columnType == "group") {
                                    return (
                                        <div className="subMenu subMenu--group" key={index}>
                                            {
                                                menuColumn.items.map((item, index) => {
                                                    return (
                                                        <nav className="subMenu" key={index}>
                                                            {
                                                                menuColumn.path
                                                                    ? <Link href={menuColumn.path}>
                                                                        <a
                                                                            href="#"
                                                                            onClick={hideDropdown}
                                                                        >
                                                                            <h4
                                                                                className="subMenu__heading"
                                                                            >
                                                                                {item.title}
                                                                            </h4>
                                                                        </a>
                                                                    </Link>
                                                                    : <a
                                                                        onClick={hideDropdown}
                                                                    >
                                                                        <h4
                                                                            className="subMenu__heading"
                                                                        >
                                                                            {item.title}
                                                                        </h4>
                                                                    </a>
                                                            }
                                                            <ul className="subMenu__list">
                                                                {item.items.map((menuItem, index) => {
                                                                    return (
                                                                        <li className="subMenu__list-item" key={index}>
                                                                            {
                                                                                menuItem.path
                                                                                    ? <Link href={menuItem.path}>
                                                                                        <a
                                                                                            className="item__title"
                                                                                            href="#"
                                                                                            onClick={hideDropdown}
                                                                                        >
                                                                                            {menuItem.title}
                                                                                        </a>
                                                                                    </Link>
                                                                                    : <a
                                                                                        className="item__title"
                                                                                        onClick={hideDropdown}
                                                                                    >
                                                                                        {menuItem.title}
                                                                                    </a>
                                                                            }
                                                                        </li>
                                                                    );
                                                                })
                                                                }
                                                            </ul>
                                                        </nav>
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                } else
                                    return (
                                        <nav className="subMenu" key={index}>
                                            {
                                                menuColumn.path
                                                    ? <Link href={menuColumn.path}>
                                                        <a
                                                            href="#"
                                                            onClick={hideDropdown}
                                                        >
                                                            <h4
                                                                className="subMenu__heading"
                                                            >
                                                                {menuColumn.title}
                                                            </h4>
                                                        </a>
                                                    </Link>
                                                    : <a
                                                        onClick={hideDropdown}
                                                    >
                                                        <h4
                                                            className="subMenu__heading"
                                                        >
                                                            {menuColumn.title}
                                                        </h4>
                                                    </a>
                                            }
                                            <ul className="subMenu__list">
                                                {menuColumn.items.map((menuItem, index) => {
                                                    return (
                                                        <li className="subMenu__list-item" key={index}>
                                                            {
                                                                menuItem.path
                                                                    ? <Link href={menuItem.path}>
                                                                        <a
                                                                            className="item__title"
                                                                            href="#"
                                                                            onClick={hideDropdown}
                                                                        >
                                                                            {menuItem.title}
                                                                        </a>
                                                                    </Link>
                                                                    : <a
                                                                        className="item__title"
                                                                        onClick={hideDropdown}
                                                                    >
                                                                        {menuItem.title}
                                                                    </a>
                                                            }
                                                        </li>
                                                    );
                                                })
                                                }
                                            </ul>
                                        </nav>
                                    );
                            })}
                        </div>
                    </div>
                    : <></>
            }
        </div>
    );
}