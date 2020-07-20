import client from "../../shared/client/Client";

const path = "/employee"

export async function getAllEmployee() {
    const employees = await client.get(path)
    return employees.data.content
}

export async function postEmployee(employee) {
    employee.position = {"id":employee.position}
    const response = await client.post(path, employee)
    return response.data.content
}

export async function putEmployee(employee) {
    console.log(employee)
    const response = await client.put(path, employee)
    return response.data.content
}

export async function deleteEmployee(id) {
    const response = await client.delete(`${path}/${id}`)
    if (response.status == 200) return true
    else return false
}