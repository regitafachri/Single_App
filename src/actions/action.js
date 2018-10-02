import axios from 'axios'


export const HANDLE_SUBMIT_DATA = "HANDLE_SUBMIT_DATA"
export const handleSubmitData = (title, notes) => {
    return {
        type: HANDLE_SUBMIT_DATA,
        payload: handleApiRequest(title, notes)
    }
}

const handleApiRequest = (title, notes) => {
    const url = 'http://172.104.50.9:3000/api/Notes'
    const data = {
        title: title,
        content: notes
    }
    return axios.post(url, data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}




