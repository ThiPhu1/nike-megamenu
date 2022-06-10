import Image from 'next/image';
import Link from 'next/link';

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
                        <span className="back-btn__text">{menuData?.prevTitle}</span>
                    </a>
                </div>
                <h3 className="subMenu__heading">
                    {menuData?.title}
                </h3>
                <ul className="subMenu__menu-list">
                    {
                        menuData?.data?.map((menuItem, index) => {
                            return (
                                <li
                                    className="menu-list__item"
                                    key={index}
                                >
                                    <Link href={menuItem.path || "#"}>
                                        <a href="#">
                                            {menuItem.title}
                                        </a>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}