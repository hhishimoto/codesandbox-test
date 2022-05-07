/**
 * const,let等の変数宣言
 */

console.log("---------- START ----------");

// --- varで変数宣言 ---
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// ---letで変数宣言 ---
let val2 = "let変数";
console.log(val2);

// let変数は上書き可能
val2 = "let変数を上書き";
console.log(val2);

// let変数は再宣言できない
// let val2 = "let変数を再宣言";
// console.log(val2);

// ---constで変数宣言 ---
const val3 = "const変数";
console.log(val3);

// const変数は上書きできない
// val3 = "const変数を上書き";
// console.log(val3);

// const変数は再宣言できない
// const val3 = "const変数を再宣言";
// console.log(val3);

// ※ただし、、
//　constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "名前",
  age: 30
};
console.log(val4);

val4.name = "名前2";
console.log(val4);

val4.address = "Aichi";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
console.log(val5);
val5[0] = "bird";
console.log(val5);
val5.push("monkey");
console.log(val5);
