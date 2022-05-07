/**
 * const,let等の変数宣言
 */

console.log("---------- const,let等の変数宣言 ----------");

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
  age: 38
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

/**
 * テンプレート文字列
 */
console.log("---------- テンプレート文字列 ----------");

const name = "なまえ";
const age = 38;

// 従来の方法(ES2015より前)
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}でーす。年齢は${age}でーす。`;
console.log(message2);

/**
 * アロー関数
 */
console.log("---------- アロー関数 ----------");

// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です"));

// 従来の関数2
const func2 = function (str) {
  return str;
};
console.log(func2("func2です"));

// アロー関数
const func3 = (str) => {
  return str;
};
console.log(func3("func3(アロー関数)です"));

// アロー関数　※処理が１行の場合はretrunを省略できる
const func4 = (str) => str;
console.log(func4("func4(アロー関数)です"));

// アロー関数で足し算
const func5 = (num1, num2) => num1 + num2;
console.log(func5(10, 20));

/**
 * 分割代入
 */
console.log("---------- 分割代入 ----------");

const myProfile = {
  name: "なまえ",
  age: 38
};

const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message3);
const { name2, age2 } = myProfile;
const message4 = `名前は${name2}でーす。年齢は${age2}歳でーす。`;
console.log(message4);

const myProfile2 = ["なまえ", 38];
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(message5);
const [name3, age3] = myProfile2;
const message6 = `名前は${name3}でーす。年齢は${age3}歳でーす。`;
console.log(message6);

/**
 * デフォルト値、引数など
 */
console.log("---------- デフォルト値 ----------");

const sayHello = (name = "デフォルト") =>
  console.log(`こんにちは！${name}さん！`);
sayHello();
sayHello("なまえ");
