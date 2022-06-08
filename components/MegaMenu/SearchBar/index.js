import Image from "next/image";
import Link from "next/link";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { useRef, useState, useEffect } from 'react';

export default function SearchBar(props) {
    const { onCLickHandler, isExtended } = props;
    const searchFieldRef = useRef();
    const [inputHasText, setInputHasText] = useState(false);
    const { isCustomDevice:isTablet } = useDeviceDetect(1024);

    useEffect(()=>{
        console.log(isTablet);
    },[isTablet])

    const searchTerms = [
        {
            title: "Air Force 1",
            url: "#",
        },
        {
            title: "Jordan",
            url: "#",
        },
        {
            title: "Air Max",
            url: "#",
        },
        {
            title: "Blazer",
            url: "#",
        },
    ]

    const onChangeHandler = () => {
        if (searchFieldRef.current.value) {
            setInputHasText(true);
        }
    }

    const clearText = () => {
        searchFieldRef.current.value = "";
        setInputHasText(false);
    }

    useEffect(() => {
        if (!isExtended) {
            clearText();
        }
    }, [isExtended])

    const onFormSubmit = () => {
        const searchValue = searchFieldRef.current.value;
        console.log("Search value", searchValue);
    }

    return (
        <div className={`searchBar-wrapper ${isExtended ? "searchBar-wrapper--expanded" : ""}`}>
            <div className="searchBar" onClick={onCLickHandler}>
                <form className="searchForm">
                    <a
                        className={`searchBar__icon absolute`}
                        type={isExtended ? "submit" : "button"}
                        onClick={isExtended ? onFormSubmit : () => false}
                    >
                        <Image
                            src="/assets/icons/search.svg"
                            width={24}
                            height={24}
                        />
                    </a>
                    <input
                        className="searchBar__input"
                        type="text"
                        placeholder="Search"
                        ref={searchFieldRef}
                        onChange={onChangeHandler}
                    />
                    {
                        inputHasText
                            ? <a
                                className="searchBar__clearText-btn"
                                onClick={clearText}
                            >
                                <Image
                                    src="/assets/icons/clear.svg"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            : <></>
                    }
                </form>
            </div>
            {
                isExtended
                    ? <>
                        <div className="searchTerm-wrapper">
                            <div className="searchTerm">
                                <h5 className="searchTerm__heading">
                                    popular search terms
                                </h5>
                                <ul className="searchTerm__list">
                                    {
                                        searchTerms.map((item, index) =>
                                            <li className="searchTerm__list-item" key={index}>
                                                <Link href={item.url}>
                                                    <a href="#">
                                                        {item.title}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </>
                    : <></>
            }
        </div>
    );
}