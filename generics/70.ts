//typeof


let strOrNum: string | number = 5;

if (strOrNum) {

}

let str20Num: typeof strOrNum;


const vasya = {
    name: 'dfg'
}

type KeyOfUser = keyof typeof user;

enum Direction {
    Up,
    Down
}

type d = keyof typeof Direction;