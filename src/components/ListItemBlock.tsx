import { useState } from "react";
import * as S from "./ListItemBlock.style";

const ListItemBlock = () => {
 const [display, setDisplay] = useState(false);
 return (
  <>
   <S.TaskBlock onClick={() => setDisplay(!display)}>
    <S.TaskId>1</S.TaskId>
    <div>Title</div>
   </S.TaskBlock>
   <S.List isActive={display}>
    <S.ListItem>One</S.ListItem>
    <S.ListItem>Two</S.ListItem>
   </S.List>
  </>
 );
};

export default ListItemBlock;
