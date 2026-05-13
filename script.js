const balance = document.getElementById("balance");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const list = document.getElementById("list");

let transactions = [];

form.addEventListener("submit", addTransaction);

function addTransaction(e){
    e.preventDefault();

    const transaction = {
        id: Date.now(),
        text: text.value,
        amount: +amount.value
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);
    updateBalance();

    text.value = "";
    amount.value = "";
}

function addTransactionDOM(transaction){
    const li = document.createElement("li");

    li.innerHTML = `
        ${transaction.text} : ₹${transaction.amount}
    `;

    list.appendChild(li);
}

function updateBalance(){
    const amounts = transactions.map(t => t.amount);

    const total = amounts.reduce((acc, item) => acc + item, 0);

    balance.innerText = `₹${total}`;
}
