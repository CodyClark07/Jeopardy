import _store from "../store.js";
import Value from "../Models/Value.js";


const _api = axios.create({
    baseURL: "https://jservice.io/api",
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
        document.getElementById("answer-sound").play()

    }
    getNewQuestion() {
        document.getElementById("new-question-sound").play()
        document.getElementById("shake").classList.add("shake")
        function timeout() {
            window.location.reload()
        }
        setTimeout(timeout, 3800)
    }


}

const service = new ValuesService();
export default service;
