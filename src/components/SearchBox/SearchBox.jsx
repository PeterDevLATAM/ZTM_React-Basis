
import "./search-box.styles.css"
const SearchBox =(props)=> {
  const {className,placeholder,onChangeHandler} = props
    return (
      <div>
        <input
          className={`search-box  ${className}`}
          placeholder= {placeholder}
          type="search"
          onChange={onChangeHandler}
        ></input>
      </div>
    );
  }
export default SearchBox