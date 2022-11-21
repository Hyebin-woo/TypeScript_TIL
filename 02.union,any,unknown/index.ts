{
    // 1. union type (|)
    let 이름: string | number = "kim";
    let 나이: string | number = 100;
    let 어레이: (number | string)[] = [1, "2", 3];
    let 오브젝트: { data: number | string } = { data: "123" };
}
{
    //any : 아무 자료나 집어넣을 수 있는 타입. (비상시 쓰는 변수 타입체크 해제기능)
    let 이름: any = "kim";
    이름 = 123;
    이름 = undefined;
    이름 = [];
}
{
    //unknown : any 타입과 동일하게 모든 값을 허용하지만, 할당된 값이 어떤 타입인지 모르기 때문에 함부로 프로퍼티나 연산을 할 수 없음( any 보다 안전함)
}
