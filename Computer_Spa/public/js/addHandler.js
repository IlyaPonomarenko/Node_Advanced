(function(){
    async function send(){
        const computer={
            id: idField.value,
            name: nameField.value,
            type: typeField.value,
            processor: processor.value,
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
            
        } catch (error) {
            
        }
    }
})();