import "./App.css";
import MainContainer from "./components/MainContainer";
import RealEstateContent from "./components/RealEstateContent";
import RealEstateList from "./components/RealEstateList";
import Sidebar from "./components/Sidebar";
import { useSearchQuery } from "./lib/hooks";

function App() {
  // const [items, setItems] = useState([]);

  const { realEstateItems, isLoading } = useSearchQuery("string");
  // console.log(isLoading);
  // console.log(realEstateItems, "????");
  return (
    <>
      <MainContainer>
        <Sidebar />
        <RealEstateList
          isLoading={isLoading}
          realEstateItems={realEstateItems}
        />
        <RealEstateContent />
      </MainContainer>
    </>
  );
}

export default App;
