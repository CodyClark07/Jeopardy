import _valuesService from "../Services/ValuesService.js";
import store from "../store.js";

//Private
function _draw() {

  let template = store.State.values.Template
  document.getElementById("question").innerHTML = template
  document.getElementById("answer").classList.add("hidden")


}

//Public
export default class ValuesController {
  constructor() {
    store.subscribe("values", _draw);
    _valuesService.getQuestion();

  }
  getAnswer() {
    _valuesService.getAnswer()
  }
  getNewQuestion() {
    _valuesService.getNewQuestion()
  }
}
