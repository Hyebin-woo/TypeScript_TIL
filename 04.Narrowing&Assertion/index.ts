{
    function 내함수(x: number | string) {
        // return x + 1; 에러남
        // Operator '+' cannot be applied to types 'string | number' and 'number'
        //string | number 같은 union type 에는 일반적으로 조작을 못하게 막아놔서 그렇습니다.

        // 해결법
        //1. 타입을 하나로 Narrowing 해주기
        // 꼭 typeof를 쓸 필요는 없고 in, instanceof 키워드도 사용가능합니다.
        function 내함수(x: number | string) {
            if (typeof x === "number") {
                return x + 1;
            } else if (typeof x === "string") {
                return x + 1;
            } else {
                return 0;
            }
        }
        //2. Assert 해주거나 둘 중 하나 해주면 됩니다.
        // 변수명 as string
        function 내함수2(x: number | string) {
            return (x as number) + 1;
        }
        console.log(내함수2(123));

        //as number라고 썼긴 했지만 number 타입처럼 +1 해주진 않습니다. 콘솔창에 결과 출력해보면 '1231' 이렇게 출력된다.

        //1. as 키워드는 union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할을 수행합니다. (number 타입을 as string 이렇게 바꾸려고 하면 에러)

        //2. 실은 그냥 타입실드 임시 해제용입니다. 실제 코드 실행결과는 as 있을 때나 없을 때나 거의 동일합니다.

        //결론: as 쓰면 간편하지만 정확히 코드짜려면 narrowing을 씁시다.
    }
}
