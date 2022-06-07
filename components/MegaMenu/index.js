import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";
import jsonFile from "./mainMenuData.json";

export default function MegaMenu(props) {

    const { data } = jsonFile;

    const [searchExpanded, setSearchExpanded] = useState(false);
    const [backdropActive, setBackdropActive] = useState(false);
    const [navBarPos, setNavbarPos] = useState('relative');

    const enableSearchExtended = () => {
        if (!searchExpanded) {
            setSearchExpanded(true);
            setBackdropActive(true);
        }
    }

    const disableSearchExtended = () => {
        if (searchExpanded) {
            setSearchExpanded(false);
            setBackdropActive(false);
        }
    }

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            if (scrollY > 36) {
                setNavbarPos(scrollY < lastScrollY ? "is-fixed" : "is-fixed is-hidden");
            } else {
                setNavbarPos('relative')
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [navBarPos]);

    return (
        <>
            <TopBar />
            <div className={`container container--fluid ${navBarPos}`}>
                <div
                    className={`navBar ${searchExpanded ? "navBar--search" : ""}`}
                >
                    <div className="navBar__left flex">
                        <Link href="#">
                            <a href="#" className="main-logo">
                                <Image
                                    src="/assets/icons/nike.svg"
                                    height={60}
                                    width={60}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="navBar__right flex align-center ">
                        <SearchBar
                            onCLickHandler={enableSearchExtended}
                            isExtended={searchExpanded}
                        />
                        <div className="utility flex">

                            <div className="utility__button-group">
                                {searchExpanded
                                    ? <a
                                        className="utility-btn utility-btn--close flex"
                                        href="#"
                                        onClick={disableSearchExtended}
                                    >
                                        <Image
                                            src="/assets/icons/times.svg"
                                            width={12}
                                            height={12}
                                        />
                                    </a>
                                    : <>
                                        <Link href="#">
                                            <a
                                                className="utility-btn flex"
                                                href="#"
                                            >
                                                <Image
                                                    src="/assets/icons/heart.svg"
                                                    width={24}
                                                    height={24}
                                                />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a
                                                className="utility-btn flex"
                                                href="#"
                                            >
                                                <Image
                                                    src="/assets/icons/bag.svg"
                                                    width={24}
                                                    height={24}
                                                />
                                            </a>
                                        </Link>
                                    </>}
                            </div>
                        </div>
                    </div>
                    {
                        !searchExpanded
                            ? <div className="main-menu">
                                {
                                    data.map((item, index) => {
                                        return (
                                            <DropdownMenu
                                                key={index}
                                                menuData={item.submenus}
                                                type="navBar"
                                                setBackdropActive={setBackdropActive}
                                            >
                                                <Link href="#">
                                                    <a
                                                        href="#"
                                                        className="navBar-nav-item"
                                                    >
                                                        {item.heading}
                                                    </a>
                                                </Link>
                                            </DropdownMenu>
                                        );
                                    })
                                }
                            </div>
                            : <></>
                    }
                </div>
                {backdropActive && <div className="backdrop"></div>}
            </div>
        </>
    );
}