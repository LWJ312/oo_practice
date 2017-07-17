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
    basicIntroduce(){
        return`My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce() {
        return super.basicIntroduce()+` I am a Student. I am at ${this.klass}.`;
    }
}


class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce() {
        return super.basicIntroduce()+` I am a Worker. I have a job.`;
    }
}