import { useState } from "react";
import * as S from "./ListItemBlock.style";

const ListItemBlock = (prop: {
 processList: { id: number; title: string; tasks: string[] }[];
}) => {
 const [display, setDisplay] = useState(false);
 /*
  * Setting state for selected task. It controls, that only the choosen
  * list is displayed
  */
 const [selection, setSelection] = useState(1);

 return (
  <>
   {prop.processList.map((listItem) => (
    <div key={listItem.id}>
     <S.TaskBlock
      isActive={selection === listItem.id && display}
      onClick={() => {
       setSelection(listItem.id);
       setDisplay(selection === listItem.id ? !display : true);
      }}
     >
      <S.TaskId>{listItem.id}</S.TaskId>
      <div>{listItem.title}</div>
     </S.TaskBlock>

     <S.List isActive={listItem.id === selection && display}>
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
