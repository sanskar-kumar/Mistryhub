import "./style.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
import { camelCase, capitalize } from "lodash";

function SearchBar() {
  const [searchItem, setSearchItem] = useState("");
  const convertedSearchItem = capitalize(camelCase(searchItem));
  var tbl = `detail/${convertedSearchItem}`;

  return (
    <div className="search-bar-parent" id="search">
      <div className="search-bar">
        <Link to={tbl} style={{ textDecoration: "none" }}>
          <button
            type="button"
            style={{
              width: "5%",
              backgroundColor: "transparent",
              border: "0",
            }}
          >
            <SearchIcon sx={{ fontSize: 40, color: "#00ADB5" }} />
          </button>
        </Link>

        <input
          className="input-bar"
          type="text"
          placeholder="What are you looking for?"
          style={{ width: "95%" }}
          value={searchItem}
          onChange={(event) => setSearchItem(event.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
