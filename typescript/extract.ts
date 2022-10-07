type Abc = Extract< 'A' | 'B' | 'C', 'C'>

type someString = Extract<'A' | 2 | 'C', string>

interface StrangeObject {
    mot: string,
    doigt: number,
    1: string,
    42: number
}
