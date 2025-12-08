const res=fetch("https://jsonplaceholder'typicode.com/users")
.then((data)=>
{
    return res.json();
}
).then(user=>
{
  console.log(user)
})
console.log(res)