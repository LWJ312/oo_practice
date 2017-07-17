/**
 * Created by lwj_312 on 17-7-14.
 */
class Person {
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    introduce(){
        return`My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(id,name,age,number){
        super(id,name,age);
        this.klass=new Class(number);
    }

    introduce() {
        if(this.klass.leader==this)
            return super.introduce()+` I am a Student. I am Leader of Class ${this.klass.number}.`;
        else
            return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`;
    }
}

class Class{
    constructor(number){
        this.number=number;}

    assignLeader(student){
            this.leader=student;
    };
}

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id,name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass)
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klass}.`;
        else
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
    }
}


