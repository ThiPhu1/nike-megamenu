import Image from "next/image";

export default function SearchBar(props) {
    return (
        <div className="searchBar-wrapper">
            <div className="searchBar">
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
        </div>
    );
}