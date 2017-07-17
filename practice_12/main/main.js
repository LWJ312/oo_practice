/**
 * Created by lwj_312 on 17-7-14.
 */
// 此处显示你的代码!
/**
 * Created by lwj_312 on 17-7-14.
 */
/**
 * Created by lwj_312 on 17-7-14.
 */
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
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
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
        this.number=number;
        this.teachers=[];
    }
    appendMember(student){
        if(student) student.klass=this;

    };
    assignLeader(student){
        if(student){
            if(student.klass==this) this.leader=student;
            else return`It is not one of us.`}
    };
    isIn(student){
        if(student.klass==this) return true;
        else return false;
    }
}

class Teacher extends Person {
    constructor(id, name, age, klasses=[]) {
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce() {
        let str='';
        if (!this.klasses)
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        else {
            for(let klass of this.klasses)
                str += (klass.number + ',');
            str=str.substr(0,str.length-1);
            return super.introduce()+` I am a Teacher. I teach Class `+str+'.';
        }

    }
    isTeaching(student) {
        let check=0;
        for(let klass of this.klasses) {
            if (klass.isIn(student)) {
                check = 1;
                break;
            }
        }
        if(check==1) return true;
        else
            return false;
    }

    print(student,methods){
       for(let klass of this.klasses) {
           if (!klass.isIn(student)) {
               if (methods == 'join')
                   return `I am ${this.name}. I know ${student.name} has joined Class ${klass.number}.`;
               if (methods == 'join and lead')
                   return `I am ${this.name}. I know ${student.name} become Leader of Class ${klass.number}.`;
           }
       }
}
}



