import React, {useEffect} from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";
import {NavLink, withRouter} from "react-router-dom";
import FaIcon from "../../shared/faicon/FaIcon"
import {FETCH_COMPLETE, HANDLE_INPUT_CHANGES, SET_LOADING, SUBMIT_COMPLETE} from "../actions/Action";
import {connect} from "react-redux";
import {postEmployee, putEmployee} from "../services/EmployeeServices";

function FormEmployee(props) {

    const {form, handleInputChanges, setLoading, submitComplete, history} = props;

    const handleSave = (event) => {
        event.preventDefault();

        setLoading()
        handlePostAndPut()
            .then((employee) => {
                submitComplete()
                history.replace("/")
            })
    }

    const handlePostAndPut = async () => {
        const {form} = props
        if (form.id) return await putEmployee(form)
        else return await postEmployee(form);
    }

    return(
        <Card className={'shadow'}>
            <CardHeader>
                <Row>
                    <Col sm={2}>
                        <NavLink to={'/'}>
                            <FaIcon icon={'fas home'} size={'2x'}/>
                        </NavLink>
                    </Col>
                    <Col sm={8}>
                        <h5>EMPLOYEE</h5>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <Form onSubmit={(event) => handleSave(event)}>
                    <FormGroup row>
                        <Label for={'name'} sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input
                                type={'text'}
                                id={'name'}
                                value={form.name}
                                placeholder={"Enter your name"}
                                onChange={(event)=>handleInputChanges('name', event.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for={'idNumber'} sm={2}>Id Number</Label>
                        <Col sm={10}>
                            <Input
                                type={'text'}
                                id={'idNumber'}
                                value={form.idNumber}
                                placeholder={"Enter your id number"}
                                onChange={(event)=>handleInputChanges('idNumber', event.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for={'gender'} sm={2}>Gender</Label>
                        <Col sm={10}>
                            <Input
                                type="select"
                                name="select"
                                id="gender"
                                value={form.gender}
                                onChange={(event) => handleInputChanges('gender', event.target.value)}>
                                <option>Gender</option>
                                <option>MALE</option>
                                <option>FEMALE</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for={'name'} sm={2}>Birth Date</Label>
                        <Col sm={10}>
                            <Input
                                type="date"
                                name="date"
                                id="name"
                                placeholder="datetime placeholder"
                                value={form.birthDate}
                                onChange={(event) => handleInputChanges('birthDate', event.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for={'name'} sm={2}>Position</Label>
                        <Col sm={10}>
                            <Input
                                type="select"
                                name="select"
                                id="{'name'}"
                                value={form.position}
                                onChange={(event) => handleInputChanges('position', event.target.value)}>
                                <option>Position</option>
                                <option value={"ff808181734c9bb001734c9cf77a0001"}>BPS</option>
                                <option value={"ff808181734caefc01734cb60a860000"}>Programmer</option>
                                <option value={"ff8081817351107801735111556a0000"}>System analyst</option>
                                <option value={"ff80818173608131017360b32d300000"}>Tester</option>
                                <option value={"ff8081817351025f01735109abce0000"}>Help desk</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={2}>
                            <Button type={'submit'}>
                                <FaIcon icon={'far save'}/> Save
                            </Button>
                        </Col>
                        <Col sm={2}>
                            <Button type={'button'}>
                                <FaIcon icon={'fas backward'}/> Cancel
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    )
}

function mapStateToProps(state) {
    return{...state}

}
function mapDispatchToProps(dispatch) {
    return{
        handleInputChanges : (inputName, inputValue) => dispatch({type:HANDLE_INPUT_CHANGES, payload:{inputName, inputValue}}),
        fetchComplete : (payload) => dispatch({type:FETCH_COMPLETE, payload}),
        setLoading : () => dispatch({type:SET_LOADING}),
        submitComplete : () => dispatch({type:SUBMIT_COMPLETE})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormEmployee))