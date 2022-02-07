import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
const CardWrapper = styled.div`
  font-size: 22px;
  &:hover .button-box {
    visibility: visible;
  }
  .button-box {
    bottom: 0;
    gap: 10px;
    padding: 6px 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    visibility: hidden;
    a, .delBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      border-radius: 8px;
    }
    .editBtn, .delBtn {
      color: #F8FFAA;
      border: 1px solid #F8FFAA;
      height: 40px;
      width: 40px;
    }
    .delBtn {
      background: transparent;
      color: #FFA1A1;
      border: 1px solid #FFA1A1;
    }
    button {
      height: 40px;
      width: 40px !important;
    }
  }
  .productImg {
    height: 350px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .productName {
    font-weight: 500;
    margin-bottom: 17px;
  }
`

const Card = (props) => {

  function editItem(id) {
    console.log(id);
    console.log('hello')
  }

  return (
    <CardWrapper>
      <div className="img-box position-relative">
        <img src={props.imgLink} className="img-fluid productImg" alt={props.productName} />
        <div className="button-box w-100 position-absolute d-flex align-items-end justify-content-center">
          <NavLink className="editBtn " to={"/edit/?group_Id=" + props.productId}>
            <FontAwesomeIcon icon={faPen} />
          </NavLink>
          <button className="delBtn" onClick={props.delete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <div className="py-3">
        <p className="productName text-center m-0">{props.productName}</p>
        <p className="text-secondary text-center m-0">{props.productPrice}</p>
      </div>
    </CardWrapper>
  );
}

export default Card;