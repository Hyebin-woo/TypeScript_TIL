// 타입의 정의가 너무 길면 Type Aliases (별칭)
{
    var 동물 = 123;
}
{
    var 동물 = { name: "woo", age: 20 };
}
{
    // const 변수는 등호로 재할당만 막는 역할
    // object 수정은 자유롭게 가능하다.
    // 하지만 타입스크립트는 readonly 또는 ? 로 이걸 막을 수 있다.
    var 출생지역 = { region: "seoul" };
    출생지역.region = "busan";
    var 여자 = {
        name: "웨빈",
    };
    // 여자.name='혜빈';  터미널에서 에러남 실제로 변환가능
}
{
}
// 같은 이름의 type 변수 재정의 불가능!
