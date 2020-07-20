import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import EmployeeReducers from "../reducers/EmployeeReducers";
import {Row, Col} from "reactstrap";
import {Route, withRouter} from "react-router-dom";
import ListEmployee from "./ListEmployee";
import FormEmployee from "./FormEmployee";

const store = createStore(EmployeeReducers)

class Employee extends React.Component{
    render() {
        return(
            <Provider store={store}>
                <Row>
                    <Col>
                        <Route exact path={"/"} render={()=><ListEmployee/>}/>
                        <Route path={"/addEmployee"} render={()=><FormEmployee/>}/>
                    </Col>
                </Row>
            </Provider>
        )
    }
}

export default withRouter(Employee)