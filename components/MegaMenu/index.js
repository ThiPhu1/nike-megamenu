import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";
import jsonFile from "./mainMenuData.json";

export default function MegaMenu(props) {

    const { data } = jsonFile;

    const [searchExpanded, setSearchExpanded] = useState(false);

    const enableSearchExtended = () => {
        if (!searchExpanded) {
            setSearchExpanded(true);
        }
    }

    const disableSearchExtended = () => {
        if (searchExpanded) {
            setSearchExpanded(false);
        }
    }

    useEffect(() => {
        console.log("searchExpanded", searchExpanded);
    }, [searchExpanded])

    return (
        <>
            <TopBar />
            <div className="container container--fluid">
                <div className={`navBar flex justify-between ${searchExpanded ? "navBar--search" : ""}`}>
                    <div className="navBar__left flex">
                        <Image
                            src="/assets/icons/nike.svg"
                            height={60}
                            width={60}
                        />
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
                    <div className="main-menu">
                        {
                            data.map((item, index) => {
                                return (
                                    <DropdownMenu
                                        menuData={item.submenus}
                                        type="navBar"
                                        key={index}
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
                </div>
            </div>
        </>
    );
}