### Post

post /api/computer

### DELETE
remove computer

DELETE /api/computer/2

deletes computer number 2 and returns a status object

# javascript (fetch)

Lets assume `cors` situation:

### GET
```js
const option={
    method:"GET",
    mode:"cors"
}

const allComputers = "http://localhost:4000/api/computers";
const data = await fetch(uriValue, options);
const result = await data.json()

const data2 = await fetch(uriValue, {mode:"cors"})
const result2 = await data2.json()
```

### POST and Put

```js
const option={
    method:"POST",
    mode:"cors",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(computerObject);
}
const postComputers = "http://localhost:4000/api/computers";
const data = await fetch(putComputer, putoptions);
const result = await data.json()
```
