import axios from 'axios'

async function autoGetToken() {
  return await axios.post("https://api.petfinder.com/v2/oauth2/token", {
    client_id: "V0hYUI1co2madgjbh3hokBr17WjctttfsLseFRZbMZ6uG5Kq9n",
    client_secret: "CODc14pMqPgiHRljuo6ODV7bAsjV0ciD9ORSpqmd",
    grant_type: "client_credentials"
  })
}

 export default autoGetToken  