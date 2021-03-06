import styled from "styled-components";
import checkmark from "../assets/checkmark.png";
import unchecked from "../assets/unchecked.png";

export const TaskBlock = styled.div`
 width: 100%;
 position: relative;
 display: flex;
 align-items: center;

 :not(:last-child) {
  margin-bottom: 20px;
 }

 padding: 10px 20px;
 font-weight: 600;
 line-height: 1;
 cursor: pointer;
 box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
 box-sizing: border-box;

 ::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: ${(props) => (props.isActive ? "240px" : "150px")};
  background-color: rgba(73, 174, 178, 1);
  transition: 0.5s ease-in-out;
 }
`;

export const TaskId = styled.span`
 min-width: 40px;
 height: 40px;
 margin-right: 20px;
 padding: 13px;
 font-weight: 600;
 text-align: center;
 color: rgb(255, 255, 255);
 background: linear-gradient(
  0deg,
  rgb(83, 187, 139) 0%,
  rgb(73, 174, 178) 100%
 );
 box-sizing: border-box;
`;

export const List = styled.ul`
 width: 100%;
 max-height: ${(props) => (props.isActive ? "300px" : "0")};
 margin: 0;
 margin-left: -8px;
 list-style: none;
 opacity: ${(props) => (props.isActive ? "1" : "0")};
 transition: max-height 0.5s, opacity 0.4s ease-in-out;
 box-sizing: border-box;
`;

export const ListItem = styled.li`
 font-weight: 400;
 font-size: 15px;
 padding-left: 30px;

 :not(:last-child) {
  margin-bottom: 10px;
 }
 :last-child {
  margin-bottom: 20px;
 }

 background: url(${(props) => (props.isChecked ? checkmark : unchecked)})
  no-repeat left;
 background-size: 16px;
`;

export const Checkbox = styled.input`
 display: none;
`;

export const Label = styled.label`
 cursor: pointer;
`;
