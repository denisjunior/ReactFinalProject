import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Row, Col} from "react-bootstrap";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="App">
      <Row className="landing">
        <Col><LeftSide /></Col>
        <Col><RightSide /></Col>
      </Row>
    </div>
  );
}

export default App;
