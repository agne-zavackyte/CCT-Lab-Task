import { useState } from "react";
import * as S from "./ListItemBlock.style";

const ListItemBlock = (prop: {
 processList: { id: number; title: string; tasks: string[] }[];
}) => {
 const [selection, setSelection] = useState<number | null>(null);
 const [checked, setChecked] = useState<string[]>([]);

 return (
  <>
   {prop.processList.map((listItem) => (
    <div key={listItem.id}>
     <S.TaskBlock
      isActive={selection === listItem.id}
      onClick={() => {
       setSelection(listItem.id);
       setChecked([]);
      }}
     >
      <S.TaskId>{listItem.id}</S.TaskId>
      <div>{listItem.title}</div>
     </S.TaskBlock>

     <S.List isActive={listItem.id === selection}>
      {listItem.tasks.map((item, index) => (
       <S.ListItem
        isChecked={checked.includes(item)}
        onClick={() => {
         setChecked(
          checked.indexOf(item) === -1
           ? [...checked, item]
           : [...checked].filter((value) => value !== item)
         );
        }}
        key={index}
       >
        <S.Checkbox
         type="checkbox"
         value={item}
         checked={checked.includes(item)}
        />
        <label dangerouslySetInnerHTML={{ __html: item }} />
       </S.ListItem>
      ))}
     </S.List>
    </div>
   ))}
  </>
 );
};

export default ListItemBlock;
