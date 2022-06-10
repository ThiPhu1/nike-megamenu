import Image from 'next/image';
import { useState, useEffect, useRef } from "react";

import SubMenuChild from './subMenuChild';

export default function SubMenu(props) {
    const { menuData, isActive, setSubMenuActive:setSubMenuActive, setMainMenuActive, disableSideBar } = props;

    const flattenMenuData = menuData?.data?.map((item) => {
        if (item.columnType) {
            return [...item.items]
        }
        return item
    }).flat();

    const [childMenuData, setChildMenuData] = useState();
    const [childMenuActive, setChildActiveStatus] = useState();

    const onMenuItemClick = (data) => {
        setChildMenuData(data);
        setSubMenuActive("t-left-2");
    }

    const onBackBtnClick = () => {
        setSubMenuActive("");
        setMainMenuActive("");
    }

    return (
        <div className={`subMenus flex ${isActive}`}>
            <div className={`subMenu-wrapper`}>
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
                            <span className="back-btn__text">{menuData?.prevTitle}</span>
                        </a>
                    </div>
                    <h3 className="subMenu__heading">
                        {menuData?.title}
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
                                                            title: menuItem.title,
                                                            prevTitle: menuData?.title,
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
                                            {menuItem.title}
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
                disableSideBar={disableSideBar}
            />
        </div>
    );
}