// Literal Type: 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입

{
    let 방향: "left" | "right";
    방향 = "left";
}
{
    /* 
    Q. 이런 함수는 어떻게 만들까요?
- '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고
- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.
- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능
- ['가위', '바보'] 이런거 return하면 에러나야함 
    */

    function rock(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
        // 가위또는바위또는보 만 들어올수 있는 배열만
        return ["가위", "보"];
    }
}
{
    //Literal Type은 const 변수와 유사하게 사용이 가능하다
    // Literal Type의 문제점
    var 자료 = {
        name: "kim",
    } as const;
    // as const 같은 경우
    //object value 값을 그대로 타입으로 지정해줌
    //object 속성들의 모두 readonly 붙여주는 것
    //  as const 는 object 자료를 완전히 잠가놓고 싶을때 사용

    function 내함수(a: "kim") {}
    // 내함수(자료.name); 타입이 kim이 아니고 string으로 나옴
    // 내함수(자료.name)
}
