import Link from "next/link";
import Image from "next/image";

import DropdownMenu from "../DropdownMenu";

export default function TopBar(props) {
    const { searchExpanded } = props;

    const helpMenuData = [
        {
            heading: "help",
            items: [
                {
                    heading: "Order Status",
                },
                {
                    heading: "Dispatch and Delivery",
                },
                {
                    heading: "Returns",
                },
                {
                    heading: "Contact Us",
                },
                {
                    heading: "Privacy Policy",
                },
                {
                    heading: "Terms of Sale",
                },
                {
                    heading: "Terms of Use",
                },
                {
                    heading: "Send Us Feedback",
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