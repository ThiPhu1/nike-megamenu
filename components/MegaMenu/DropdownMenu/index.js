import Link from "next/link";

export default function DropdownMenu(props) {
    const { children, menuData, type, setBackdropActive } = props;
    const hasContent = menuData && menuData.length > 0;

    const onMouseEnterHandler = () => {
        setBackdropActive(true);
    }

    const onMouseLeaveHandler = () => {
        setBackdropActive(false);
    }

    return (
        <div
            className={`menu-dropdown-container menu-dropdown-container__${type}`}
            onMouseEnter={(type == "navBar" && hasContent) ? onMouseEnterHandler : () => false}
            onMouseLeave={(type == "navBar" && hasContent) ? onMouseLeaveHandler : () => false}>
            {children}
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
                                                            <h4 className="subMenu__heading">{item.title}</h4>
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
                                                                                        >
                                                                                            {menuItem.title}
                                                                                        </a>
                                                                                    </Link>
                                                                                    : <a
                                                                                        className="item__title"
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
                                            <h4 className="subMenu__heading">{menuColumn.title}</h4>
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
                                                                        >
                                                                            {menuItem.title}
                                                                        </a>
                                                                    </Link>
                                                                    : <a
                                                                        className="item__title"
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