{
    //함수에 타입지정 2가지
    //1. 함수로 들어오는 파라미터 타입지정은 파라미터 옆에 적으면 됩니다.
    //2. 함수가 실행된 후 남는 값 (return 우측에 있는 값) 타입지정하고 싶으면 함수명() 우측에 적으면 됩니다.
    function 내함수(x: number): number {
        return x * 2;
    }
    // 함수는 특이하게도 void라는 타입을 사용가능하다.
    // '아무것도 없이 공허함' 뜻 viod
    // "return할 자료가 없는 함수의 타입()"으로 사용이 가능하다
    function 내함수2(x: number): void {
        x * 2;
    }

    // ts와 js와 다른점(함수)
    // 함수 호출시 타입지정된 파라미터 필수임
    //그렇게 안하고 싶으면 x? : number 이렇게 물음표 하면 됨
    // 변수? : number
    //변수: number | undefined  와 같음
    function 함수3(x?: number): void {}
}
