import axios from 'axios'

axios.get('http://localhost:5005/input').then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})