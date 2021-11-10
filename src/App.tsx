import ListItemBlock from "./components/ListItemBlock";
import * as S from "./App.style";
import { ProcessListData } from "./utils/data";

function App() {
 return (
  <S.Section>
   <S.MainHeading>CCT Lab Process</S.MainHeading>
   <ListItemBlock processList={ProcessListData} />
  </S.Section>
 );
}

export default App;
