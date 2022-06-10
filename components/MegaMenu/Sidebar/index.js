import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import SubMenu from "./subMenu";

export default function Sidebar(props) {
    const { sidebarActive, disableSideBar, menuData } = props;
    const sidebarRef = useRef();

    const [subMenuData, setSubMenuData] = useState();
    const [mainMenuActive, setMainMenuActive] = useState();
    const [subMenuActive, setSubMenuActive] = useState();

    const utilities = [
        {
            icon: "/assets/icons/bag.svg",
            title: "bag",
            path: "#",
        },
        {
            icon: "/assets/icons/package.svg",
            title: "orders",
            path: "#",
        },
        {
            icon: "/assets/icons/help.svg",
            title: "help",
            path: "#",
        },
    ]

    useEffect(() => {
        if (sidebarActive) {
            disableBodyScroll(sidebarRef.current);
            return;
        }
        enableBodyScroll(sidebarRef.current);

    }, [sidebarActive])

    useEffect(() => {
        if (!sidebarActive) {
            setMainMenuActive("");
            setSubMenuActive("");
        }
    }, [sidebarActive])


    const onMenuItemClick = (data) => {
        setSubMenuData(data);
        setMainMenuActive("t-left-2");
        setSubMenuActive("t-left");
    }


    return (
        <div className={`sidebar-container ${sidebarActive ? "is-active" : ""}`} ref={sidebarRef}>
            {/* <div className="container-viewport"> */}
            <div className={`sidebar-wrapper ${mainMenuActive}`}>
                <div className="sidebar">
                    <div className="close-btn-wrapper">
                        <a
                            className="close-btn"
                            onClick={disableSideBar}
                        >
                            <Image
                                src="/assets/icons/times.svg"
                                height={18}
                                width={18}
                            />
                        </a>
                    </div>
                    <ul className="sidebar__menu-list">
                        {
                            menuData.map((menuItem, index) => {
                                return (
                                    <li
                                        className="menu-list__item"
                                        key={index}
                                        onClick={
                                            menuItem.items && menuItem.items.length > 0
                                                ? () => {
                                                    onMenuItemClick(
                                                        {
                                                            title: menuItem.title,
                                                            prevTitle: "All",
                                                            data: menuItem.items,
                                                        }
                                                    );
                                                }
                                                : disableSideBar
                                        }
                                    >
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
                                        {menuItem.items && menuItem.items.length > 0
                                            ? <Image
                                                src="/assets/icons/chevron-right.svg"
                                                width={12}
                                                height={12}
                                            />
                                            : <></>
                                        }
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className="sidebar__bottom">
                        <div className="brand-item-list">
                            <Link href="#">
                                <a 
                                    className="brand-item"
                                    onClick={disableSideBar}
                                >
                                    <Image
                                        className="brand-item__logo"
                                        src="/assets/icons/jordan.svg"
                                        height={30}
                                        width={30}
                                    />
                                    <span
                                        className="brand-item__title"
                                    >
                                        Jordan
                                    </span>
                                </a>
                            </Link>
                        </div>
                        <div className="register">
                            <h4 className="register__heading">
                                Become a Nike Member for the best products, inspiration and stories in sport.{" "}
                                <Link href="#">
                                    <a href="#">
                                        Learn more
                                    </a>
                                </Link>
                            </h4>
                            <div className="register__button-group">
                                <Link
                                    href="#"

                                >
                                    <a
                                        href="#"
                                        className="btn btn--primary"
                                        onClick={disableSideBar}
                                    >
                                        join us
                                    </a>
                                </Link>
                                <Link
                                    href="#"

                                >
                                    <a
                                        href="#"
                                        className="btn btn--outlined"
                                        onClick={disableSideBar}
                                    >
                                        sign in
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="utility">
                            <ul className="utility-list">
                                {
                                    utilities.map((item, index) => {
                                        return (
                                            <li className="utility-list__item" key={index}>
                                                <Link href="#">
                                                    <a
                                                        className="flex item"
                                                        href="#"
                                                        onClick={disableSideBar}
                                                        >
                                                        <Image
                                                            className="item__icon"
                                                            src={item.icon}
                                                            height={24}
                                                            width={24}
                                                        />
                                                        <span
                                                            className="item__title"
                                                        >{item.title}</span>
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <SubMenu
                menuData={subMenuData}
                isActive={subMenuActive}
                setSubMenuActive={setSubMenuActive}
                setMainMenuActive={setMainMenuActive}
                disableSideBar={disableSideBar}
            />
            {/* </div> */}
        </div>
    )
}