import { ChangeEvent } from "react"
import { HiOutlineSearch } from "react-icons/hi"

function Searchbar(props: { query: string, handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="searchbar">
      <HiOutlineSearch className="search__icon" />
      <input
        type="search"
        className="search__input"
        value={props.query}
        onChange={(e) => props.handleInputChange(e)}
        placeholder="Search..."
      />
    </div>
  )
}

export default Searchbar