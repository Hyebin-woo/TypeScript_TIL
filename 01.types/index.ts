{
    let 이름: string = "kim";
    const 나이: number = 27;

    let 회원들: string[] = ["woo", "kim"];

    const 내가좋아하는: { song: string; singer: string } = {
        song: "에잇",
        singer: "아이유",
    };

    let project: {
        member: string[];
        days: number;
        started: boolean;
    } = {
        member: ["kim", "park"],
        days: 30,
        started: true,
    };

    // 모든 변수에 타입지정할 필요 없이 변수 생성시 타입스크립트가 자동으로 타입을 지정해준다. (변수명에 마우스 올려보면 바로바로 확인가능)

    let 이름2 = "kim";
    let 나이2 = 20;
}
