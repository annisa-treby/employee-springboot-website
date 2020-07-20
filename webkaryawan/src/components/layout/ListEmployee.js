import React, {useEffect, useState} from "react";
import Header from "./Header";
import {Button, Table} from "@material-ui/core";
import {NavLink, withRouter} from "react-router-dom";
import {FETCH_COMPLETE, HANDLE_EDIT_BUTTON, SET_LOADING} from "../actions/Action";
import {deleteEmployee, getAllEmployee} from "../services/EmployeeServices";
import {Col, ModalBody, ModalFooter, ModalHeader, Spinner} from 'reactstrap'
import {connect} from "react-redux";
import FaIcon from "../../shared/faicon/FaIcon"
import Modal from "react-responsive-modal";


function ListEmployee(props) {

    const [open, setOpen] = useState(false)
    const [target, setTarget] = useState(undefined)

    const loadData = () =>{
        const {setLoading, fetchComplete} = props
        setLoading()
        getAllEmployee()
            .then((employees) => {
                fetchComplete(employees)
            })
    }
    const onOpen=(id)=>{
        setTarget(id)
        setOpen(true)
    }

    const onClose=()=>{
        setOpen(false)
        setTarget(undefined)
    }

    const handleEditButton = (id) => {
        const {handleEdit, history} = props
        handleEdit(id)
        history.replace('/addEmployee')
    }

    const handleDeleteButton = () => {

        deleteEmployee(target.setTarget)
            .then((status)=>{
                if (status){
                    onClose()
                    loadData()
                }
            })
    }

    useEffect(()=>{
        loadData()
    }, [])

    const generateTableRows=() =>{
        const {employees, isLoading} = props

        let rows = <tr><td><Spinner className={'text-center'} color={'info'} type={'grow'} aria-colspan={6}/></td></tr>

        if(!isLoading){
           rows = employees.map((employee, index) => {
               console.log(employee.position.name)
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{employee.name}</td>
                        <td>{employee.birthDate}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.position.name}</td>
                        <td>
                            <Button onClick={() => handleEditButton(employee.id)}>
                                Edit
                            </Button>
                        </td>
                        <td>
                            <Button onClick={() => onOpen({setTarget:employee.id})}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                )
            })
        }
        return rows
    }

    return(
        <div>
            <Header/>
            <Col>
                <NavLink to={'/addEmployee'}>
                    <Button>
                        <h5><FaIcon icon={'fas plus'}/> Add</h5>
                    </Button>
                </NavLink>
            </Col>            <Table responsive striped hover className={'m-0'}>
                <thead>
                <th>id</th>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Gender </th>
                <th>Position</th>
                <th colSpan={2}>Actions</th>
                </thead>
                <tbody>{generateTableRows()}</tbody>
            </Table>
            <Modal open={open} onClose={onClose}>
                <ModalHeader>Delete Confirmation !!!</ModalHeader>
                <ModalBody>This genre will be deleted permanently, are you sure to continue ?</ModalBody>
                <ModalFooter>
                    <Button onClick={()=> handleDeleteButton()}>Confirm</Button>
                    <Button onClick={()=> onClose()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}

function mapStateToProps(state) {
    return {...state}
}

function mapDispatchToProps(dispatch) {
    return{
        setLoading : () => dispatch({type:SET_LOADING}),
        fetchComplete : (payload) => dispatch({type:FETCH_COMPLETE, payload}),
        handleEdit : (payload) => dispatch({type:HANDLE_EDIT_BUTTON, payload}),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListEmployee))