/**
 * Created by lwj_312 on 17-7-14.
 */
describe('oo', () => {

    it('practice_7_Person', () => {
        let result = new Person("Tom", 21).introduce();
        let expect_string = 'My name is Tom. I am 21 years old.';
        expect(result).toEqual(expect_string);
    });

    it('practice_7_Student_inherited Person', () => {
        let result = new Student("Tom", 21,2).introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);
    });

    it('practice_7_Teacher_inherited Person', () => {
        let result = new Teacher("Tom", 21,2).introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.';

        let result0=new Teacher("Tom", 21,).introduce();
        let expect_string0 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.';
        expect(result).toEqual(expect_string);
        expect(result0).toEqual(expect_string0);
    });
});