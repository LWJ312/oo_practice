/**
 * Created by lwj_312 on 17-7-14.
 */
/**
 * Created by lwj_312 on 17-7-14.
 */
/**
 * Created by lwj_312 on 17-7-14.
 */
describe('oo', () => {

    it('practice_11_Person', () => {
        let result = new Person('id', "Tom", 21).introduce();
        let expect_string = 'My name is Tom. I am 21 years old.';
        expect(result).toEqual(expect_string);
    });

    it('practice_11_Student_inherited Person_Tom is leader', () => {
        let class2=new Class(2);
        let klass=new Class(2);
        let Tom = new Student('id', "Tom", 21, klass);
        class2.appendMember(Tom);
        class2.assignLeader(Tom);
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.';
        expect(result).toEqual(expect_string);


    });
    it('practice_11_Student_inherited Person_there is no leader', () => {

        let class2=new Class(2);
        let klass=new Class(2);
        let Tom = new Student('id', "Tom", 21, klass);
        class2.appendMember(Tom);
        class2.assignLeader();
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);


    });
    it('practice_11_Student_inherited Person_other is leader', () => {

        let class2=new Class(2);
        let klass=new Class(2);
        let Tom = new Student('id', "Tom", 21, klass);
        let Jenny = new Student('id', "Jenny", 20, klass);
        class2.appendMember(Tom);
        class2.appendMember(Jenny);
        class2.assignLeader(Jenny);
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);

    });
    it('practice_11_Student_inherited Person_Tom is not appended', () => {
        let class2=new Class(2);
        let klass=new Class(2);
        let Tom = new Student('id', "Tom", 21, klass);
        let result = class2.assignLeader(Tom);
        let expect_string = 'It is not one of us.';
        expect(result).toEqual(expect_string);

    });
    it('practice_11_Student_inherited Person_Tom is not appended and introduce', () => {
        let class2=new Class(2);
        let klass=new Class(2);
        let Tom = new Student('id', "Tom", 21, klass);
        class2.appendMember();
        let result = Tom.introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(result).toEqual(expect_string);

    });


    it('practice_11_Teacher_inherited Person_introduce', () => {
        let class2=new Class(2);
        let class3=new Class(3);
        let result = new Teacher('id', "Tom", 21, [class2,class3]).introduce();
        let expect_string = 'My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2,3.';
        expect(result).toEqual(expect_string);

        let result0 = new Teacher('id', "Tom", 21, '').introduce();
        let expect_string0 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.';
        expect(result0).toEqual(expect_string0);
    });
    it('practice_11_Teacher_inherited Person_isTeachingT', () => {
        let class2=new Class(2);
        let class3=new Class(3);
        let klass=new Class(2);
        let Jack=new Student('id',"Jack",12,klass);
        class2.appendMember(Jack);
        let result1=new Teacher('id', "Tom", 21,[class2,class3]).isTeaching(Jack);

        expect(result1).toEqual(true);
    });
    it('practice_11_Teacher_inherited Person_isTeachingF', () => {
        let class2=new Class(2);
        let class3=new Class(3);
        let klass=new Class(2);
        let Jack=new Student('id',"Jack",12,klass);
        let result1=new Teacher('id', "Tom", 21,[class2,class3]).isTeaching(Jack);

        expect(result1).toEqual(false);
    });

});