// Andre

import axios from 'redaxios'

const url = 'http://localhost:3001/Exemple'

export const getApi = async () => {
  const reponse = await axios.get(url)
  return reponse.data
}
