import Link from "next/link";
import Image from "next/image";

import SearchBar from "../SearchBar";
import DropdownMenu from "../DropdownMenu";
import jsonFile from "../mainMenuData.json";

export default function MegaMenu(props) {

    const { data } = jsonFile;

    return (
        <div className="container container--fluid">
            <div className="navBar flex justify-between">
                <div className="navBar__left flex">
                    <Image
                        src="/assets/icons/nike.svg"
                        height={60}
                        width={60}
                    />
                </div>
                <div className="navBar__right flex align-center ">
                    <div className="main-menu flex">
                        {
                            data.map((item,index) => {
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
                    <div className="utility flex">
                        <SearchBar />
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
                    </div>
                </div>
            </div>
        </div>
    );
}