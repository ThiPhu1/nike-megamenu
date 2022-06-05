import Image from "next/image";
import Link from "next/link";

export default function SearchBar({ onCLickHandler, isExtended }) {

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

    return (
        <div className={`
                searchBar-wrapper
                ${isExtended ? "searchBar-wrapper--expanded" : ""}
            `}>
            <div className="searchBar" onClick={onCLickHandler}>
                <a className="searchBar__logo">
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
                />
            </div>
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
        </div>
    );
}