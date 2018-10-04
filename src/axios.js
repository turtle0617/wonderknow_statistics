import axios from "axios";
let url = "https://devche.com/api/speech/data";

function getData() {
  return axios.get(url);
}
export default getData;
