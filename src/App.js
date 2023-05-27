import { Container } from "react-bootstrap";
import { person } from "./data";
import DetesCount from "./components/DetesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import { useState } from "react";
function App() {
  const [personData, setPersonData] = useState(person);
  const onDlete = () => {
    setPersonData([]);
  };
  const onViewDAta = () => {
    setPersonData(person);
  };

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DetesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deletData={onDlete} onViewDAta={onViewDAta} />
      </Container>
    </div>
  );
}

export default App;
