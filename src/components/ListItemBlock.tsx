import * as S from "./ListItemBlock.style";

const ListItemBlock = () => {
 return (
  <>
   <S.TaskBlock>
    <S.TaskId>1</S.TaskId>
    <div>Title</div>
   </S.TaskBlock>
   <S.List>
    <S.ListItem>One</S.ListItem>
    <S.ListItem>Two</S.ListItem>
   </S.List>
  </>
 );
};

export default ListItemBlock;
