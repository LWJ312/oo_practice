/**
 * Created by lwj_312 on 17-7-14.
 */
class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return`My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce() {
        return super.introduce()+` I am a Student. I am at Class ${this.klass}.`;
    }
}

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce() {
        if(this.klass)
            return super.introduce()+` I am a Teacher. I teach Class ${this.klass}.`;
        else
            return super.introduce()+` I am a Teacher. I teach No Class.`;
    }
}

