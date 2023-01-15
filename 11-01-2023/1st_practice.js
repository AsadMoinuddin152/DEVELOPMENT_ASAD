const employee ={
    id: 10,
    names : 'ratna',
    salary: 6543.26,
    perment: true,
    display: function(){
        return ' --ID : '+this.id+", Name: "+this.names+" , Salary : " +this.salary;
    }

}
console.log(employee.display());

var john = employee.display.bind(employee);
console.log(john())