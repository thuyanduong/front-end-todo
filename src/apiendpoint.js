let prodEndpoint = "https://todo-production-c8c7.up.railway.app"
let devEndpoint = "http://localhost:3001"

let APIURL = process.env.NODE_ENV === "production" ? prodEndpoint : devEndpoint

export default APIURL