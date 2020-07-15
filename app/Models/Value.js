export default class Value {
    constructor(data) {
        this.question = data.question
        this.answer = data.answer
        this.value = data.value
        this.category = data.category.title
    }

    get Template() {
        return /* html */`
        <div id="shake" class="col-12 col-md-6 border rounded border-danger shadow-lg p-4 card">
        <h2>Category: <u> ${this.category}</u> </h2>
        <h3>Question: ${this.question}</h3>
        <button class="btn btn-primary" onclick="app.valuesController.getAnswer()"> Get Answer</button>
        <button class=" btn btn-outline-success" onclick="app.valuesController.getNewQuestion()">New Question</button>
        <h5 id="answer" class="mt-4">Answer:  ${this.answer}- $${this.value}</h5>
    </div>
    `
    }
}