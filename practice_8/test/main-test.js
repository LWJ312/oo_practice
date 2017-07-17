/**
 * Created by lwj_312 on 17-7-14.
 */
describe('oo', () => {

    it('practice_8_Person', () => {
        let result = new Person("Tom", 21).introduce();
        let expect_string = 'My name is Tom. I am 21 years old.';
        expect(result).toEqual(expect_string);
    });

    it('practice_8_Student_inherited Person', () => {
        let result = new Student("Tom", 21, 2).introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);
    });

    it('practice_8_Teacher_inherited Person', () => {
        let result = new Teacher("Tom", 21,2).introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.';
        expect(result).toEqual(expect_string);

        let result0=new Teacher("Tom", 21,).introduce();
        let expect_string0 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.';
        expect(result0).toEqual(expect_string0);

        let Jerry_klass1=new Student("Jerry",21,2).klass.number;
        let result1=new Teacher("Tom", 21,2).introducewith(Jerry_klass1);
        let expect_string1 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.';
        expect(result1).toEqual(expect_string1);

        let Jerry_klass2=new Student("Jerry",21,3).klass.number;
        let result2=new Teacher("Tom", 21,2).introducewith(Jerry_klass2);
        let expect_string2 = "My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.";
        expect(result2).toEqual(expect_string2);
    });
});
