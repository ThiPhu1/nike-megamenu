import Image from 'next/image';
import { useState, useEffect, useRef } from "react";

export default function SubMenuChild(props) {
    const { menuData, isActive, setActiveStatus, setSubMenuActive } = props;

    const onBackBtnClick = () => {
        setSubMenuActive("t-right");
    }

    return (
        <div className={`subMenu-wrapper subMenu-child-wrapper ${isActive}`}>
            <div className="subMenu">
                <div className="back-btn-wrapper">
                    <a
                        className="back-btn"
                        onClick={onBackBtnClick}
                    >
                        <Image
                            src="/assets/icons/chevron-left.svg"
                            height={12}
                            width={12}
                        />
                        <span className="back-btn__text">{menuData?.prevHeading}</span>
                    </a>
                </div>
                <h3 className="subMenu__heading">
                    {menuData?.heading}
                </h3>
                <ul className="subMenu__menu-list">
                    {
                        menuData?.data?.map((menuItem, index) => {
                            return (
                                <li
                                    className="menu-list__item"
                                    key={index}
                                >
                                    <a
                                        className="item__title"
                                    >
                                        {menuItem.heading}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}