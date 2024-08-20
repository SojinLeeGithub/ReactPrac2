// 가짜함수 만들 때 도움되는 함수를 정의
// makeArry 함수 
// 자바스크립트가 기본으로 제공하는 Array 클래스를 좀 더 간결하게 사용하고자 만듦

export const makeArray = (length: number) => new Array(length).fill(null)
export const range = (min: number, max: number): number[] => 
    makeArray(max -min).map((notUsed, index) => index + min)
export const random = (min: number, max: number): number => 
    Math.floor(Math.random() * (max =min)) + min