import styled from "styled-components";
import Button from "../Button";
import {
  faBell,
  faPaperPlane,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.section`
  gap: 20px;
  padding: 10px 20px;
  .navbrand {
    font-size: 32px;
    font-weight: 700;
    text-decoration: none;
    color: black;
  }
  .search {
    border-radius: 20px;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    padding: 10px 15px;
    width: 100%;
  }
  .search-box {
    min-width: 200px;
    .position-absolute {
      right: 20px;
      color: black;
      font-size: 14px;
      font-weight: 100;
    }
  }
`;
const Header = () => {
  return (
    <HeaderWrapper className="d-flex align-items-center justify-content-center  justify-content-sm-between flex-wrap">
      <Link className="navbrand" to="/">Furniture</Link>
      <div className="search-box position-relative d-flex align-items-center">
        <input type="text" className="search" placeholder="Search" />
        <FontAwesomeIcon className="position-absolute" icon={faSearch} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
