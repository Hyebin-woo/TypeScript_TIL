{
    // 일반 변수랑 구분하기 위해 대부분 타입 변수는 대문자로 씀
    type Animal = string | number | undefined;

    let 동물: Animal = 123;
}
{
    type Animal = { name: string; age: number };

    let 동물: Animal = { name: "woo", age: 20 };
}
{
    const 출생지역 = { region: "seoul" };
    출생지역.region = "busan";
    // const 변수는 등호로 재할당만 막는 역할
    // object 수정은 자유롭게 가능하다.
    // 타입스크립트는 readonly 또는 ? 로 이걸 막을 수 있다.

    type Me = {
        readonly name: string;
        //name?: string;
    };

    const 여자: Me = {
        name: "웨빈",
    };

    // 여자.name='혜빈';  터미널에서 에러남 실제로 변환가능
}
{
    // | 연산자로 type 합치기
    type Name = string;
    type Age = number;
    type Person = Name | Age;

    // & 연산자로 type 합치기
    type PositionX = { x: number };
    type PositionY = { y: number };
    type NewType = PositionX & PositionY;
}
// 같은 이름의 type 변수 재정의 불가능!

