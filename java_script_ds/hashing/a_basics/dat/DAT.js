
let Student=require('./Student.js')
   function insert(students, student){
         /*We are using Student roll number as an index*/
         students[student.roll_number]=student;
    }

    function update(students,student){
        students[student.roll_number]=student;
    }

    function  deleteStudent(students, student){
        students[student.roll_number]=null;
    }

    function  search( students, roll_number){
        return students[roll_number];
    }

   function main(){
        let students=new Array();
        insert(students,new Student(1,"Subbu",78));
        insert(students,new Student(2,"Ravi",95));
        insert(students,new Student(3,"Trump",87));
        insert(students,new Student(4,"Ivanka Trump",78));
        insert(students,new Student(5,"Putin",68));
        console.log(students);
    }

    main();
