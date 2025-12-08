let Employee=[{ena:"Arun",mob:111},
              {ena:"Ajay",mob:112},
              {ena:"Bala",mob:113},
              {ena:"Vinoth",mob:211},
              {ena:"Bharath",mob:212},
              {ena:"Dhinesh",mob:213}
]
let newEmployee=employee.filter((emp)=>
{
    return emp.ena.includes("A")
})
console.log(newEmp)