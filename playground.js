function Student(name) {
    this.name = name;
}

Student.prototype.say = function() {
    console.log('Say ==>', this.name);
}

Student.prototype.type = 'person';

var student = new Student('Wangnima');

student.say();

var student2 = new student.__proto__.constructor('Zhaorenzhi');

console.log('StudentType ==>', student.name, student.type);

console.log(student, student2);