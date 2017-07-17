/**
 * Created by lwj_312 on 17-7-14.
 */
describe('oo', () => {

    it('practice_6_Person', () => {
        let result = new Person("Tom", 21).introduce();
        let expect_string = 'My name is Tom. I am 21 years old.';
        expect(result).toEqual(expect_string);
    });

    it('practice_6_Student_inherited Person', () => {
        let result = new Student("Tom", 21,"Class 2").introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);
    });

    it('practice_6_Worker_inherited Person', () => {
        let result = new Worker("Tom", 21).introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Worker. I have a job.';
        expect(result).toEqual(expect_string);
    });
});