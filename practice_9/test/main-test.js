/**
 * Created by lwj_312 on 17-7-14.
 */
describe('oo', () => {

    it('practice_9_Person', () => {
        let result = new Person('id', "Tom", 21).introduce();
        let expect_string = 'My name is Tom. I am 21 years old.';
        expect(result).toEqual(expect_string);
    });

    it('practice_9_Student1_inherited Person', () => {

        let Tom = new Student('id', "Tom", 21, 2);
        Tom.klass.assignLeader(Tom);
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.';
        expect(result).toEqual(expect_string);


    });
    it('practice_9_Student2_inherited Person', () => {

        let Tom = new Student('id', "Tom", 21, 2);
        Tom.klass.assignLeader();
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);


    });
    it('practice_9_Student3_inherited Person', () => {

        let Tom = new Student('id', "Tom", 21, 2);
        let Jenny = new Student('id', "Jenny", 20, 2);
        Tom.klass.assignLeader(Jenny);
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);

    });

    it('practice_9_Teacher_inherited Person', () => {
        let result = new Teacher('id', "Tom", 21, 2).introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.';
        expect(result).toEqual(expect_string);

        let result0 = new Teacher('id', "Tom", 21,).introduce();
        let expect_string0 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.';
        expect(result0).toEqual(expect_string0);
    });
});