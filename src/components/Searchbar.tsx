import { ChangeEvent } from "react"
import { HiOutlineSearch } from "react-icons/hi"

function Searchbar(props: {
  query: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="my-8 mx-auto flex max-w-2xl items-center rounded-2xl border-2 border-black">
      <HiOutlineSearch className="ml-4" />
      <input
        type="search"
        className="flex flex-1 rounded-2xl border-none p-2 outline-none"
        value={props.query}
        onChange={(e) => props.handleInputChange(e)}
        placeholder="Search..."
      />
    </div>
  )
}

export default Searchbar
