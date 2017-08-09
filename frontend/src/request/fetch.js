/**
 * Created by rodrigo.wippel on 08/03/2017.
 */
import Axios from 'axios'

const HOST = ''

function Fetch(){
    const instance = Axios.create({
        baseURL : HOST,
        timeout: 100000
    })

    return {
        get: (url) => instance.get(url),
        post: (url, data) => instance.post(url, data),
        delete: (url) => instance.delete(url),
        put: (url, data) => instance.put(url, data)
    }
}

export default Fetch()