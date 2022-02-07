import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonWrapper = styled.button`
  border-radius: 10px;
  background: ${props => props.background ? props.background : "#282A30"};
  padding: ${props => props.padding ? props.padding : '10px 20px'};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.color ? props.color : '#282A30'};
  display: flex-inline;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color ? props.color : 'white'};
  font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
  transition: background 2s;
  &:hover {
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <ButtonWrapper background={props.background} padding={props.padding} color={props.color} fontSize={props.fontSize}>
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.text}</span>
    </ButtonWrapper>
  );
};

export default Button;
