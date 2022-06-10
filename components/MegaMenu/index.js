import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";
import Sidebar from "./Sidebar";

import useDeviceDetect from "../../utils/useDeviceDetect";

import jsonFile from "./mainMenuData.json";

export default function MegaMenu(props) {

    const { data } = jsonFile;

    const [searchExpanded, setSearchExpanded] = useState(false);
    const [backdropActive, setBackdropActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [navBarPos, setNavbarPos] = useState('');

    const { isCustomDevice: isTablet } = useDeviceDetect(1024);

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
            if (scrollY > 50) {
                setNavbarPos(scrollY < lastScrollY ? "is-fixed" : "is-fixed is-hidden");
            } else {
                setNavbarPos('')
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

    const onBackDropClick = () => {
        if (searchExpanded) { setSearchExpanded(false); }
        if (sidebarActive) { setSidebarActive(false); }
        setBackdropActive(false);
    }

    const enableSideBar = () => {
        setSidebarActive(true);
        setBackdropActive(true);
    }

    const disableSideBar = () => {
        setSidebarActive(false);
        setBackdropActive(false);
    }

    useEffect(() => {
        if (!isTablet) {
            setSidebarActive(false);
            setBackdropActive(false);
        }
    }, [sidebarActive, isTablet])

    return (
        <div className="container container--fluid">
            <TopBar
                searchExpanded={searchExpanded}
            />
            <div className="navBar-container container container--fluid relative z-9999">
                <div className={`navBar-wrapper ${navBarPos}`}>
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
                                            onClick={disableSearchExtended}
                                        >
                                            <Image
                                                src="/assets/icons/times-l.svg"
                                                width={12}
                                                height={12}
                                            />
                                        </a>
                                        : <>
                                            <Link href="#">
                                                <a
                                                    className="utility-btn utility-btn--wishlist flex"
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
                                                >
                                                    <Image
                                                        src="/assets/icons/bag.svg"
                                                        width={24}
                                                        height={24}
                                                    />
                                                </a>
                                            </Link>
                                            <a
                                                className="utility-btn flex utility-btn--bars"
                                                onClick={enableSideBar}
                                            >
                                                <Image
                                                    src="/assets/icons/bars.svg"
                                                    width={24}
                                                    height={24}
                                                />
                                            </a>
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
                                                    menuData={item.items}
                                                    type="navBar"
                                                    navItemTitle={item.title}
                                                    setBackdropActive={setBackdropActive}
                                                >
            
                                                </DropdownMenu>

                                            );
                                        })
                                    }
                                </div>
                                : <></>
                        }
                    </div>
                </div>
            </div>
            <Sidebar
                disableSideBar={disableSideBar}
                sidebarActive={sidebarActive}
                setSidebarActive={setSidebarActive}
                menuData={data}
            />
            <div className={`backdrop ${backdropActive ? "is-active" : ""} ${sidebarActive ? "backdrop--sidebar" : ""}`} onClick={onBackDropClick}></div>
        </div>
    );

    function le({}) {
      return (<div className="navBar__left flex">
                            <Link href="#">
                                <a href="#" className="main-logo">
                                    <Image src="/assets/icons/nike.svg" height={60} width={60} />
                                </a>
                            </Link>
                        </div>);
    }
  }