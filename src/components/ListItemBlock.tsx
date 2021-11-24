import { useState } from "react";
import * as S from "./ListItemBlock.style";

const ListItemBlock = (prop: {
 processList: { id: number; title: string; tasks: string[] }[];
}) => {
 const [selection, setSelection] = useState<number | null>(null);

 return (
  <>
   {prop.processList.map((listItem) => (
    <div key={listItem.id}>
     <S.TaskBlock
      isActive={selection === listItem.id}
      onClick={() => {
       setSelection(listItem.id);
      }}
     >
      <S.TaskId>{listItem.id}</S.TaskId>
      <div>{listItem.title}</div>
     </S.TaskBlock>

     <S.List isActive={listItem.id === selection}>
      {listItem.tasks.map((item) => (
       <S.ListItem key={item} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
     </S.List>
    </div>
   ))}
  </>
 );
};

export default ListItemBlock;
