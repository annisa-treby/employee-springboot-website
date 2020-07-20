import client from "../../shared/client/Client";

const path = "/position"

export async function getAllPositions() {
    const positions = await client.get(path)
    return positions.data.content
}

export async function postPosition(position) {
    const response = await client.post(path, position)
    return response.data.content
}

export async function putPosition(position) {
    const response = await client.put(path, position)
    return response.data.content
}

export async function deletePosition(id) {
    const response = await client.delete(`${path}/${id}`)
    return response.status
}