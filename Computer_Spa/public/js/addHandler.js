(function(){
    let idField;
    let nameField;
    let typeField;
    let processorFiled;
    let amountField;
    document.addEventListener("DOMContentLoaded", init)
    function init(){
        idField = document.getElementById("id")
        nameField = document.getElementById("name")
        typeField = document.getElementById("type")
        processorFiled = document.getElementById("processor")
        amountField = document.getElementById("amount")
        document.getElementById("sumbit").addEventListener("click", send)
    }
    async function send(){
        const computer={
            id: idField.value,
            name: nameField.value,
            type: typeField.value,
            processor: processorFiled.value,
            amount: +amountField.value
        }
        try {
            const options={
                method:"POST",
                body:JSON.stringify(computer),
                headers:{
                    "Content-Type":"application/json"
                },
                mode:"cors"
            }
            const data = await fetch("http://localhost:4000/api/computers", options)
            const status = data.json();
            
        } catch (error) {
            
        }
    }
})();