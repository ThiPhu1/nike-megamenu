import Link from "next/link";
import Image from "next/image";

import DropdownMenu from "../DropdownMenu";

export default function TopBar(props) {
    const { searchExpanded } = props;

    const helpMenuData = [
        {
            title: "help",
            items: [
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
        <div className={`container container--fluid relative  ${searchExpanded ?  "z-50" : "z-10000"}`}>
            <div className={`topBar flex justify-between ${searchExpanded ?  "is-hidden" : ""}`}>
                <div className="topBar__left flex">
                    <Image
                        src="/assets/icons/jordan.svg"
                        height={24}
                        width={24}
                    />
                </div>
                <div className="topBar__right flex align-center ">
                    <DropdownMenu
                        menuData={helpMenuData}
                        type="topBar"
                        navItemTitle="help"
                    >
                        <Link href="#">
                            <a
                                href="#"
                                className="topBar-nav-item"
                            >
                                help
                            </a>
                        </Link>
                    </DropdownMenu>
                    <Link href="#">
                        <a
                            href="#"
                            className="topBar-nav-item"
                        >
                            join us
                        </a>
                    </Link>
                    <Link href="#">
                        <a
                            href="#"
                            className="topBar-nav-item"
                        >
                            sign in
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}