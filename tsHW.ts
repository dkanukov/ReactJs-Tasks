//task1
type ConcatFn = (a: string, b: string) => string;
const concat: ConcatFn = (a, b) => a + b;

//task2
interface Task {
    howIDoIt: string;
    simeArray: Array<string | number>;
    withData: [{howIDoIt: string, simeArray: Array<string | number>}];
}
const MyHometask: Task = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//task3
interface MyArray<T> {
    [N: number]: T;

    reduce<U>(callback: (previousValue: U, currentValue: T, currentIndex: number, array: MyArray<T>) => U, initialValue: U): MyArray<T>;
    // reduce2(callback: (previousValue: T, currentValue: T, currentIndex: number, array: MyArray<T>) => T, initialValue: T): MyArray<T>;
}
const myArray: MyArray<number> = [1, 2, 3, 4, 5];
let a = myArray.reduce((a, b) => a + b, 0);

//task4

interface IHomeTask {
    data: string;
    numericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win',
    },
}




