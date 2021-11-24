```
const db = 'db'
function get(db,payload = {}){
    let str = `db.collection('${db}')`
    for(let key in payload){
        const value = payload[key]
        if(typeof value === 'string'){
            str += `.${key}('${value}')`
        }else if(typeof value === 'object'){
            str += `.${key}(${JSON.stringify(value)})`
        }else if(typeof value === 'undefined'){
            str += `.${key}()`
        }
    }
    console.log(str)
}
get('list',{
    field:'title',
    age:[1,18],
    params:{
        name:'mority',
        age:18
    },
    get:undefined
})

```