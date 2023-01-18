class student
{
   // constructor
    constructor(id,name,section)
    {
         // properties declaration
        this.id=id;
        this.name=name;
        this.section=section;

    }
    // methods declaration
    printStudentDetails()
    {
        document.writeln("student ID : "+this.id+"<br>student Name : "+this.name+"<br>student section : "+this.section);
    }
}

var stu1=new student(101,"Neel","A");
var stu2=new student(102,"Uttam","B");
var stu3=new student(103,"Gargesh","C");

emp1.printStudentDetails();
document.writeln("<hr height='5px'>");
emp2.printStudentDetails();
document.writeln("<hr height='5px'>");
emp3.printStudentDetails();
