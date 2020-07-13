import _store from "../store.js";
import Value from "../Models/Value.js";


const _api = axios.create({
    baseURL: "http://jservice.io/api",
    timeout: 3000

})
class ValuesService {
    getQuestion() {
        _api.get("random").then(res => {
            // console.log(res.data[0].question)
            let rawData = res.data[0]
            let values = new Value(rawData)

            _store.commit("values", values)
        }).catch(err => console.error(err))
    }
    getAnswer() {
        document.getElementById("answer").classList.remove("hidden")
    }


}

const service = new ValuesService();
export default service;
