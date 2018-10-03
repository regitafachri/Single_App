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

export const GET_DATA = "GET_DATA"
export const getDataApi = () => {
    return {
        type: GET_DATA,
        payload:getData()
    }
}

const getData = () => {
    const url = "http://172.104.50.9:3000/api/Notes"
    return axios.get(url)
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}



// To do list
// 1. bikin action untuk request API pake get
// 2. di bagian component, dispatch / tembak action tersebut
// 3. respone dari request API di nomer 1 dibawa ke reducers
// 4. bikin reducers nya
// 5. di bagian component bikin mapstatetoprops yang me listen ke reducers nya get Notes supaya bisa dapet update terbaru dari Notes
