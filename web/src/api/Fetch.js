import axios from 'axios'
const url = 'http://localhost:4000/api/transition'

export const checkState = async (next_step, current_step) => {
    let params = { next_step, current_step }
    try {
        const response = await axios.get(url, { params })
        return response.data
    } catch (e) {
        return { error: true }
    }
}