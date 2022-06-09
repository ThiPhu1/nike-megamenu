import Image from 'next/image';
import { useState, useEffect, useRef } from "react";

import SubMenuChild from './subMenuChild';

export default function SubMenu(props) {
    const { menuData, isActive, setActiveStatus:setSubMenuActive } = props;

    const flattenMenuData = menuData?.data?.map((item) => {
        if (item.columnType) {
            return [...item.items]
        }
        return item
    }).flat();

    useEffect(() => {
        console.log("flattenMenuData", flattenMenuData);

    }, [menuData])

    // useEffect(() => {
    //     console.log("isActive", isActive);

    // }, [isActive])

    const [childMenuData, setChildMenuData] = useState();
    const [childMenuActive, setChildActiveStatus] = useState(false);


    const onMenuItemClick = (data) => {
        setChildMenuData(data);
        setChildActiveStatus(true);
        setSubMenuActive(false);
    }

    const onBackBtnClick = () => {
        setSubMenuActive(false);
    }

    return (
        <div className="subMenus flex">
            <div className={`subMenu-wrapper ${isActive ? "is-active" : "is-hidden"}`}>
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
                            flattenMenuData?.map((menuItem, index) => {
                                return (
                                    <li
                                        className="menu-list__item"
                                        key={index}
                                        onClick={
                                            menuItem?.items && menuItem?.items.length > 0
                                                ? () => {

                                                    onMenuItemClick(
                                                        {
                                                            heading: menuItem.heading,
                                                            prevHeading: menuData?.heading,
                                                            data: menuItem?.items,
                                                        }
                                                    );
                                                }
                                                : () => false
                                        }
                                    >
                                        <a
                                            className="item__title"
                                        >
                                            {menuItem.heading}
                                        </a>
                                        {menuItem?.items && menuItem?.items.length > 0
                                            ? <Image
                                                className="item__chevron"
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
                </div>
            </div>
            <SubMenuChild
                menuData={childMenuData}
                isActive={childMenuActive}
                setActiveStatus={setChildActiveStatus}
                setSubMenuActive={setSubMenuActive}
            />
        </div>
    );
}