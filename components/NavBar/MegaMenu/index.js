import Link from "next/link";
import Image from "next/image";

import SearchBar from "../SearchBar";
import DropdownMenu from "../DropdownMenu";

export default function MegaMenu(props) {

    const helpMenuData = [
        {
            heading: "help",
            menuItems: [
                {
                    title: "Order Status",
                },
                {
                    title: "Dispatch and Delivery",
                },
                {
                    title: "Returns",
                },
                {
                    title: "Contact Us",
                },
                {
                    title: "Privacy Policy",
                },
                {
                    title: "Terms of Sale",
                },
                {
                    title: "Terms of Use",
                },
                {
                    title: "Send Us Feedback",
                },
            ]
        }
    ];

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
                    <DropdownMenu
                        menuData={helpMenuData}
                        type="navBar"
                    >
                        <Link href="#">
                            <a
                                href="#"
                                className="navBar-nav-item"
                            >
                                men
                            </a>
                        </Link>
                    </DropdownMenu>
                    <DropdownMenu
                        menuData={helpMenuData}
                        type="navBar"
                    >
                        <Link href="#">
                            <a
                                href="#"
                                className="navBar-nav-item"
                            >
                                women
                            </a>
                        </Link>
                    </DropdownMenu>
                    <DropdownMenu
                        menuData={helpMenuData}
                        type="navBar"
                    >
                        <Link href="#">
                            <a
                                href="#"
                                className="navBar-nav-item"
                            >
                                kids
                            </a>
                        </Link>
                    </DropdownMenu>
                    <DropdownMenu
                        menuData={helpMenuData}
                        type="navBar"
                    >
                        <Link href="#">
                            <a
                                href="#"
                                className="navBar-nav-item"
                            >
                                customise
                            </a>
                        </Link>
                    </DropdownMenu>
                    <SearchBar />
                    <Link href="#">
                        <a
                            className="utility-btn" 
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
                            className="utility-btn" 
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
    );
}