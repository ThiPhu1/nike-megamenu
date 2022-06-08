import Image from "next/image";
import { useState, useEffect } from "react";

export default function Sidebar(props) {

    const { sidebarActive, disableMenuBar } = props;

    return (
        <div className={`sidebar-wrapper ${sidebarActive ? "is-active" : ""} `}>
            <a
                className="close-btn"
                onClick={disableMenuBar}
            >
                <Image
                    src="/assets/icons/times.svg"
                    height={16}
                    width={16}
                />
            </a>
        </div>
    )
}