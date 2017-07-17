/**
 * Created by lwj_312 on 17-7-14.
 */
/**
 * Created by lwj_312 on 17-7-14.
 */
describe('oo', () => {

    it('practice_10_Person', () => {
        let result = new Person('id', "Tom", 21).introduce();
        let expect_string = 'My name is Tom. I am 21 years old.';
        expect(result).toEqual(expect_string);
    });

    it('practice_10_Student_inherited Person_Tom is leader', () => {

        let Tom = new Student('id', "Tom", 21, 2);
        class2=new Class(2);
        class2.appendMember(Tom);
        class2.assignLeader(Tom);
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.';
        expect(result).toEqual(expect_string);


    });
    it('practice_10_Student_inherited Person_there is no leader', () => {

        let Tom = new Student('id', "Tom", 21, 2);
        class2=new Class(2);
        class2.appendMember(Tom);
        class2.assignLeader();
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);


    });
    it('practice_10_Student_inherited Person_other is leader', () => {

        let Tom = new Student('id', "Tom", 21, 2);
        class2=new Class(2);
        let Jenny = new Student('id', "Jenny", 20, 2);
        class2.appendMember(Tom);
        class2.appendMember(Jenny);
        class2.assignLeader(Jenny);
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);

    });
    it('practice_10_Student_inherited Person_Tom is not appended', () => {

        let Tom = new Student('id', "Tom", 21, 2);
        class2=new Class(2);
        class2.appendMember();
        let result = class2.assignLeader(Tom);
        let expect_string = 'It is not one of us.';
        expect(result).toEqual(expect_string);

    });
    it('practice_10_Student_inherited Person_Tom is not appended and introduce', () => {

        let Tom = new Student('id', "Tom", 21, 2);
        class2=new Class(2);
        class2.appendMember();
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);

    });


    it('practice_10_Teacher_inherited Person', () => {
        let result = new Teacher('id', "Tom", 21, 2).introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.';
        expect(result).toEqual(expect_string);

        let result0 = new Teacher('id', "Tom", 21,).introduce();
        let expect_string0 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.';
        expect(result0).toEqual(expect_string0);
    });
});