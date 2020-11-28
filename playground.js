function Student(name) {
    this.name = name;
}

Student.prototype.say = function() {
    console.log('Say ==>', this.name);
}

function GoodStudent(name) {
    Student.call(this, name);
}


Student.prototype.type = 'person';

var student = new Student('Wangnima');

student.say();

GoodStudent.prototype = new Student();
GoodStudent.prototype.constructor = GoodStudent;


var student2 = new student.__proto__.constructor('Zhaorenzhi');

var student3 = new GoodStudent('Gaoshuaijian');


console.log(student, student2);
console.log(student3);