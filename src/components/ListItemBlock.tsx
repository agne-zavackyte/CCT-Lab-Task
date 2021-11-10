import { useState } from "react";
import * as S from "./ListItemBlock.style";

const ListItemBlock = (prop: {
 processList: { id: number; title: string; tasks: string[] }[];
}) => {
 const [display, setDisplay] = useState(false);
 return (
  <>
   {prop.processList.map((listItem) => (
    <div key={listItem.id}>
     <S.TaskBlock isActive={display} onClick={() => setDisplay(!display)}>
      <S.TaskId>{listItem.id}</S.TaskId>
      <div>{listItem.title}</div>
     </S.TaskBlock>
     <S.List isActive={display}>
      {listItem.tasks.map((li) => (
       <S.ListItem key={li}>{li}</S.ListItem>
      ))}
     </S.List>
    </div>
   ))}
  </>
 );
};

export default ListItemBlock;
