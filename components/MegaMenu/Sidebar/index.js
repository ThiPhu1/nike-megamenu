import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

export default function Sidebar(props) {
    const { sidebarActive, disableMenuBar, menuData } = props;

    useEffect(() => {
        if (sidebarActive) {
            disableBodyScroll(sidebarRef.current);
            return;
        }
        enableBodyScroll(sidebarRef.current);

    }, [sidebarActive])

    const sidebarRef = useRef();

    console.log(menuData);

    return (
        <div className={`sidebar-wrapper ${sidebarActive ? "is-active" : ""} `} ref={sidebarRef}>
            <a
                className="close-btn flex"
                onClick={disableMenuBar}
            >
                <Image
                    src="/assets/icons/times.svg"
                    height={18}
                    width={18}
                />
            </a>
            <div className="sidebar">
                <ul className="menu-list">
                    {
                        menuData.map((menuItem, index) => {
                            return (
                                <li className="menu-list__item" key={index}>
                                    <a
                                        className="item__title"
                                    >
                                        <span>{menuItem.heading}</span>
                                    </a>
                                    {menuItem.submenus && menuItem.submenus.length > 0
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

                </div>
            </div>
        </div>
    )
}