# JavaScript 基础

## 1.注释方式

```js
//单行注释
/*多行注释*/
```

## 2.变量声明

在计算机科学中，数据就是一切，它对于计算机意义重大。JavaScript的七种提供不同的数据类型，它们是`undefined`（未定义）， `null`（空）， `boolean`（布尔型）， `string`（字符串），`symbol`，（`number`数字），`bigint`（可以表示任意大的一次）和`object`（对象)。

在 JavaScript 中我们以分号结束语句。变量名称可以由数字、字母、美元符号 `$` 或者下划线 `_` 组成，但是不能包含空格或者以数字为开头。

## 3.赋值

在 JavaScript 中，你可以使用赋值（assignment）运算符 （`=`）将值存储在变量中。

```js
myVariable = 5;
```

这条语句把 `Number` 类型的值 `5` 赋给变量 `myVariable`。

在将值赋给运算符左侧的变量之前，将先执行 `=` 运算符右侧的所有运算。

```js
var myVar;
myVar = 5;
```

首先，此代码创建一个名为 `myVar` 的变量。 然后，数值 `5` 被赋给变量 `myVar`。 现在，如果 `myVar` 再次出现在代码中，程序将会将它视为 `5`。

### **1.将一个变量的值赋给另一个**

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

以上代码声明了一个没有初始值的变量 `myVar`，然后给它赋值为 `5`。 紧接着，又声明了一个没有初始值的变量 `myNum`。 然后，变量 `myVar` 的内容（也就是 `5`）被赋给了变量 `myNum`。 现在，变量 `myNum` 的值也为 `5`。(赋值可以是数值也可以是字符串)

### 2.**使用赋值运算符初始化变量**

```js
var myVar = 0;
```

创建一个名为 `myVar` 的变量，并指定其初始值为 `0`。在循环声明全局变量的时候会使用到。

### 3.**理解未初始化的变量**

当 JavaScript 中的变量被声明的时候，程序内部会给它一个初始值 `undefined`。 当你对一个值为 `undefined` 的变量进行运算操作的时候，算出来的结果将会是 `NaN`，它的意思是 "Not a Number"。 当你用一个值是 `undefined` 的变量来做字符串拼接操作的时候，它会转换成字符串（string）`undefined`。

### 4.**了解变量名区分大小写**

在 JavaScript 中所有的变量和函数名都是大小写敏感的。 要区别对待大写字母和小写字母。

使用驼峰命名法（camelCase）来书写一个 Javascript 变量。 在驼峰命名法（camelCase）中，变量名的第一个单词的首写字母小写，后面的单词的第一个字母大写。

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

### 5.**var 和 let 关键字之间的差异**

使用 `var` 关键字声明变量的最大问题之一是会覆盖变量声明，最后一次对相同变量的声明会覆盖第一次的声明

```js
var camper = "James";
var camper = "David";
console.log(camper);
David
```

在上面的代码中，`camper` 变量最初声明为 `James`，然后被覆盖为 `David`。 然后控制台显示字符串 `David`。ES6 中引入了一个名为 `let` 的关键字，这是对 JavaScript 的一次重大更新，以解决与 `var` 关键字有关的潜在问题。

如果将上面代码中的 `var` 替换为 `let` ，则会导致错误：

```js
let camper = "James";
let camper = "David";
console.log(camper);
```

![image-20220105210827159](https://i0.hdslb.com/bfs/album/9da5f17beb4f73e60a12ca13ea106bd3eec4bebc.png)

未发现的语法错误。Identifier 'camper' 已经被声明了

所以不像 `var`，当你使用 `let` 时，同名的变量只能声明一次。

### **6. const 关键字声明只读变量**

关键字 `let` 并不是声明变量的唯一新方法。 在 ES6 中，你还可以使用 `const` 关键字声明变量。

`const` 具有 `let` 的所有出色功能，另外还有一个额外的好处，即使用 `const` 声明的变量是只读的。 它们是一个常量值，这意味着一旦一个变量被赋值为 `const`，它就不能被重新赋值：

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

![image-20220105211404115](https://i0.hdslb.com/bfs/album/d490f50f8c9c8f2269ad1b041f73bd4686d0a14c.png)

未发现的类型错误。向常量变量赋值。

由于重新分配 `FAV_PET` 的值，控制台将显示错误。

你应该始终使用 `const` 关键字命名不想重新分配的变量。 这有助于避免给一个常量进行额外的再次赋值。

命名常量的常见做法是全部使用大写字母，单词之间用下划线分隔。

**注意： 对于不可变值，开发人员通常使用大写变量标识符，对可变值（对象和数组）使用小写或驼峰式标识符。 你将在后面的挑战中了解有关对象、数组以及不可变和可变值的更多信息。 同样在后面的挑战中，你将看到大写、小写或驼峰式变量标识符的示例。**

## 4.运算

### 1.**加法运算**

`Number` 是 JavaScript 中的一种数据类型，用来表示数值。

现在我们来尝试在 JavaScript 中做加法运算。

JavaScript 中，我们通过符号 `+` 来进行加法运算。

```js
const myVar = 5 + 10;
```

现在，变量 `myVar` 的值为 `15`。

### 2.**减法运算**

我们也可以在 JavaScript 中进行减法运算。

JavaScript 中使用 `-` 来做减法运算。

```js
const myVar = 12 - 6;
```

现在，变量 `myVar` 的值为 `6`。

### **3.乘法运算**

我们也可在 JavaScript 中使用乘法运算。

JavaScript 使用 `*` 符号表示两数相乘。

```js
const myVar = 13 * 13;
```

现在，变量 `myVar` 的值为 `169`。

### **4.除法运算**

我们可以在 JavaScript 中做除法运算。

JavaScript 中使用 `/` 符号做除法运算。

```js
const myVar = 16 / 2;
```

在，变量 `myVar` 的值为 `8`。

### 5.**数字递增**

使用 `++`，我们可以很容易地对变量进行自增或者 +1 运算。

```js
i++;
```

等效于：

```js
i = i + 1;
```

**注意：`i++;` 这种写法省去了书写等号的必要。**

### 6.**数字递减**

使用自减符号 `--`，你可以很方便地对一个变量执行自减或者 -1 运算。

```js
i--;
```

等效于：

```js
i = i - 1;
```

**注意：`i--;` 这种写法省去了书写等号的必要。**

### 7.**浮点数**

我们也可以把小数存储到变量中。 小数有时候也被称作浮点数或者 floats。

**提示： 不是所有的实数都可以用浮点数（floating point）来表示。 因为可能产生四舍五入的错误， 编程语言有数字上限只能显示有限的数字，包含小数点和负数，故会有精度损失。**

### 8.**求余运算**

remainder 求余运算符 `%` 返回两个数相除得到的余数

```
5 % 2 = 1 因为
Math.floor(5 / 2) = 2 （商）
2 * 2 = 4
5 - 4 = 1 （余数）
```

**用法**
在数学中，判断一个数是奇数还是偶数，只需要判断这个数除以 `2` 得到的余数是 0 还是 1。

```
17 % 2 = 1（17 是奇数）
48 % 2 = 0（48 是偶数）
```

**提示余数运算符（remainder）有时被错误地称为“模数”运算符。 它与模数非常相似，但不能用于负数的运算。**

### 9.**复合赋值之 +=**

在编程中，通常通过赋值来修改变量的内容。 记住，赋值时 JavaScript 会先计算等号右边的内容，所以我们可以写这样的语句：

```js
myVar = myVar + 5;
```

给 `myVar` 加上 `5`。 这是最常见的运算赋值语句，即先运算、再赋值。还有一类操作符是一步到位，既做运算也赋值的。

其中一种就是 `+=` 运算符。

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
```

控制台将会显示 `6`。

### 10.**复合赋值之 -=**

与 `+=` 操作符类似，`-=` 操作符用来对一个变量进行减法赋值操作。

```js
myVar = myVar - 5;
```

将从 `myVar` 中减去 `5`。 等价于：

```js
myVar -= 5;
```

### 11.**复合赋值之 \*=**

`*=` 操作符是让变量与一个数相乘并赋值。

```js
myVar = myVar * 5;
```

将 `myVar` 乘以 `5`。 等价于：

```js
myVar *= 5;
```

### 12.**复合赋值之 /=**

`/=` 操作符是让变量与另一个数相除并赋值。

````js
myVar = myVar / 5;
````

将 `myVar` 除以 `5`。 等价于：

````js
myVar /= 5;
````

## 5.符号

### 1.**转义字符串中的引号**

定义一个字符串必须要用单引号或双引号来包裹它。 那么当你的字符串里面包含引号 `"` 或者 `'` 时该怎么办呢?

在 JavaScript 中，可以通过在引号前面使用反斜杠（`\`）来转义引号。

```js
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

有了转义符号，JavaScript 就知道这个单引号或双引号并不是字符串的结尾，而是字符串内的字符。 所以，上面的字符串打印到控制台的结果为：

```js
Alan said, "Peter is learning JavaScript".
```

使用反斜杠给 `myStr` 变量赋值一个字符串，这样如果你要打印它到控制台，将会看到：

````js
I am a "double quoted" string inside "double quotes".
````

### 2.**用单引号引用字符串****

JavaScript 中的字符串可以使用开始和结束都是同类型的单引号或双引号表示。 与其他一些编程语言不同的是，单引号和双引号的功能在 JavaScript 中是相同的。

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

当你需要在一个字符串中使用多个引号的时候，你可以使用单引号包裹双引号或者相反。 常见的场景比如在字符串中包含对话的句子需要用引号包裹。 另外比如在一个包含有 `<a>` 标签的字符串中，标签的属性值需要用引号包裹。

````js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
````

然而，如果你需要在其中使用外面的引号，这就成为一个问题。 记住，一个字符串在开头和结尾处有相同的引号。 要知道，字符串在开头和结尾都有相同的引号，如果在中间使用了相同的引号，字符串会提前中止并抛出错误。

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

在这里 `badStr` 会产生一个错误。

在上面的 goodStr 中，通过使用反斜杠 `\` 转义字符可以安全地使用两种引号。

**提示： 不要混淆反斜杠 `\` 和斜杠 `/`。 它们不是一回事。**

### 3.**转义字符**

引号不是字符串中唯一可以被转义（escaped）的字符。 使用转义字符有两个原因：

1. 首先是可以让你使用无法输入的字符，例如退格。
2. 其次是可以让你在一个字符串中表示多个引号，而不会出错。

我们在之前的挑战中学到了这个。

| 代码 |  输出  |
| :--: | :----: |
| `\'` | 单引号 |
| `\"` | 双引号 |
| `\\` | 反斜杠 |
| `\n` | 换行符 |
| `\r` | 回车符 |
| `\t` | 制表符 |
| `\b` |  退格  |
| `\f` | 换页符 |



**请注意，必须对反斜杠本身进行转义，它才能显示为反斜杠。**

### 4.**用加号运算符连接字符串**

在 JavaScript 中，当 `+` 操作符被用于一个 `String` 类型的值的时候，它被称作拼接操作符。 你可以通过拼接其他字符串来创建一个新的字符串。

例如：

```js
'My name is Alan,' + ' I concatenate.'
'My name is Alan, I concatenate.'
```

**提示：** 注意空格。 拼接操作不会在两个字符串之间添加空格。所以，如果想加上空格的话，你需要自己在字符串里面添加。

例如：

```js
const ourStr = "I come first. " + "I come second.";
'I come first. I come second.'
```

字符串 `I come first. I come second.` 将显示在控制台中。

### 5.**用 += 运算符连接字符串**

我们还可以使用 `+=` 运算符来拼接字符串到现有字符串变量的结尾。 对于那些被分割成几段的长的字符串来说，这一操作是非常有用的。

**提示：** 注意空格。 拼接操作不会在两个字符串之间添加空格，所以，如果想要加上空格的话，你需要自己在字符串里面添加。

例如：

```js
let ourStr = "I come first. ";
ourStr += "I come second.";
ourStr 的值为字符串 I come first. I come second.
```

### 6.**用变量构造字符串**

有时候你需要创建一个类似 [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)（填词游戏）风格的字符串。 通过使用连接运算符（`+`），你可以插入一个或多个变量来组成一个字符串。

例如：

```js
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
ourStr 值为 Hello, our name is freeCodeCamp, how are you?
```

### 7.**将变量追加到字符串**

就像我们可以用多行字符串字面量构建单个字符串一样，我们还可以使用加且赋值（`+=`）运算符将字符串追加到字符串的末尾。

示例：

```js
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr 值为 freeCodeCamp is awesome!。
```

### 8.**查找字符串的长度**

你可以通过在字符串变量或字符串后面写上 `.length` 来获得 `String` 的长度。

```js
console.log("Alan Peter".length);
```

字符串 `10` 将会出现在控制台中。

例如，如果我们创建了一个变量 `const firstName = "Ada"`，我们可以通过使用 `firstName.length` 找出字符串 `Ada` 的长度属性。

### 9.**三元运算符**

条件运算符（ conditional operator,）（也称为三元运算符（ ternary operator））的就像写成一行的 if-else 表达式

语法是：`a ? b : c`, where `a` 是条件，当条件返回 `true` 的时候运行代码 `b`，当条件返回 `false` 的时候运行代码 `c`。

以下函数使用 `if/else` 语句来检查条件：

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

这可以使用三元运算符重写：

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

### 10.**使用多个三元运算符**

在之前的挑战中，你使用了一个条件运算符。 你也可以将多个运算符串联在一起以检查多种条件。

下面的函数使用 `if`，`else if` 和 `else` 语句来检查多个条件：

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

以上函数可以使用多个三元运算符重写：

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

如上文所示，对多个三元运算符进行每个条件都是单独一行的格式化被认为是最佳做法。 使用多个三元运算符而没有适当的缩进可能会使您的代码难以理解。 例如：

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

## 6.**字符串**

### 1.**查找字符串中的字符**

方括号表示法（Bracket notation）是一种在字符串中的特定 index（索引）处获取字符的方法。

大多数现代编程语言，如 JavaScript，不同于人类从 1 开始计数。 它们是从 0 开始计数。 这被称为基于零（Zero-based）的索引。

例如，单词 `Charles` 的索引 0 的字符是 `C`。 所以如果 `const firstName = "Charles"`，你可以通过 `firstName[0]` 得到字符串第一个字母的值。

示例：

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` 值为字符串 `C` 。

### 2.**了解字符串的不变性**

在 JavaScript 中，字符串（`String`）的值是不可变的（immutable），这意味着一旦字符串被创建就不能被改变。

例如，下面的代码：

```js
let myStr = "Bob";
myStr[0] = "J";
'J'
```

是不会把变量 `myStr` 的值改变成 `Job` 的，因为变量 `myStr` 是不可变的。 注意，这*并不*意味着 `myStr` 永远不能被改变，只是字符串字面量 string literal 的各个字符不能被改变。 改变 `myStr` 的唯一方法是重新给它赋一个值，

例如：

```js
let myStr = "Bob";
myStr = "Job";
'Job'
```

### 3.**查找字符串中的第 N 个字符**

你也可以使用方括号（ bracket notation）来获得一个字符串中的其他位置的字符。

请记住，程序是从 `0` 开始计数，所以获取第一个字符实际上是第零个字符串。

例如：

```js
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
firstName[1] == "d";
```

### 4.**查找字符串中的最后一个字符**

要获取字符串的最后一个字符，可以用字符串的长度减 1 的索引值。

例如，如果 `const firstName = "Ada"`，则可以使用 `firstName[firstName.length - 1]` 获取字符串最后一个字母的值。

示例：

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
firstName[firstName.length - 1] == "a"
```

`lastLetter` 值为字符串 `a`。

### 5.**查找字符串中的倒数第 N 个字符**

我们既可以获取字符串的最后一个字符，也可以用获取字符串的倒数第 N 个字符。

例如，你可以使用 `firstName[firstName.length - 3]` 获取 `const firstName = "Augusta"` 字符串的倒数第三个字母的值

例如：

```js
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` 的值应该为字符串 `s`。

## 7.数组

### 1.**使用数组值存储在变量中**

使用数组（`array`），我们可以在一个地方存储多个数据。

以左方括号开始定义一个数组，以右方括号结束，里面每个元素之间用逗号隔开。

例如：

 ```js
 const sandwich = ["peanut butter", "jelly", "bread"];
 ```

### 2.**嵌套数组**

也可以在其他数组中嵌套数组，如：

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

这也叫做多维数组（multi-dimensional array）。

### 3.**通过索引访问数组中的数据**

我们可以使用索引（indexes）来访问数组中的数据。

数组索引与字符串一样使用方括号来表示，不同的是，它们不是指定字符，而是指定数组中的一个条目。 数组索引与字符串索引一样是从 0 开始（zero-based）的，所以数组中第一个元素的索引编号是 `0`。

**示例**

```js
const array = [50, 60, 70];
array[0];
const data = array[1];
```

现在 `array[0]` 的值是 `50`， `data` 的值为 `60`.

**注意：**数组名与方括号之间不应该有任何空格，比如`array [0]` 。 尽管 JavaScript 能够正确处理这种情况，但是当其他程序员阅读你写的代码时，这可能让他们感到困惑。

### 4.**通过索引修改数组中的数据**

与字符串不同，数组的条目是 可变的 并且可以自由更改，即使数组是用 `const` 声明的。

**示例**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
const ourArray = [15, 40, 30];
```

`ourArray` 值为 `[15, 40, 30]`。

**注意：** 数组名与方括号之间不应该有任何空格，比如 `array [0]` 。 尽管 JavaScript 能够正确处理这种情况，但是当其他程序员阅读你写的代码时，这可能让他们感到困惑。

### 5.**使用索引访问多维数组**

我们可以把多维数组看作成是*数组中的数组*。 使用方括号表示法访问数组时，第一个方括号访问的是数组的最外层（第一层），第二个方括号访问的是数组的第二层，以此类推。

**例如：**

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];
```

`arr[3]` 为 `[[10, 11, 12], 13, 14]`，`arr[3][0]` 为 `[10, 11, 12]`，并且 `arr[3][0][1]` 为 `11`。

**注意：** 数组名与方括号之间不应该有任何空格，比如 `array [0][0]` 甚至是 `array [0] [0]` 都是不允许的。 尽管 JavaScript 能够正确处理这种情况，但是当其他程序员阅读你写的代码时，这可能让他们感到困惑。

### 6.**使用 push() 操作数组**

一个将数据添加到数组末尾的简单方法是 `push()` 函数。

`.push()` 接受一个或多个参数（parameters），并把它压入到数组的末尾。

示例：

```js
const arr1 = [1, 2, 3];
arr1.push(4);

arr1 = [1, 2, 3, 4]
```

```js
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

arr2 = ['Stimpson', 'J', 'cat', ['happy', 'joy']]
```

`arr1` 现在值为 `[1, 2, 3, 4]`

`arr2` 值为 `["Stimpson", "J", "cat", ["happy", "joy"]]`。

### 7.**使用 pop() 操作数组**

改变数组中数据的另一种方法是用 `.pop()` 函数。

`.pop()` 函数用来弹出一个数组末尾的值。 我们可以把这个弹出的值赋给一个变量存储起来。 换句话说就是 `.pop()` 函数移除数组末尾的元素并返回这个元素。

数组中任何类型的元素（数值，字符串，甚至是数组）都可以被弹出来 。

```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//前后顺序不影响
```

第一个 `console.log` 将显示值 `6`，第二个将显示值 `[1, 4]`。

### 8.**使用 shift() 操作数组**

`pop()` 函数用来移出数组中最后一个元素。 如果想要移出第一个元素要怎么办呢？

这时候我们就需要 `.shift()` 了。 它的工作原理就像 `.pop()`，但它移除的是第一个元素，而不是最后一个。

示例：

```js
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArray 值为 Stimpson，ourArray 值为 ["J", ["cat"]]
```

### 9.**使用 unshift() 操作数组**

不仅可以 `shift`（移出）数组中的第一个元素，也可以 `unshift`（移入）一个元素到数组的头部。

`.unshift()` 函数用起来就像 `.push()` 函数一样，但不是在数组的末尾添加元素，`unshift()` 在数组的头部添加元素。

示例：

````js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
````

在 `shift`、`ourArray` 后值为 `["J", "cat"]`。 在 `unshift`、`ourArray` 后值为 `["Happy", "J", "cat"]`。

## 8.函数

### 1.**用函数编写可重用代码**

在 JavaScript 中，我们可以把代码的重复部分抽取出来，放到一个函数 （functions）中。

举个例子：

```js
function functionName() {
  console.log("Hello World");
}
```

你可以通过函数名加上后面的小括号来调用（invoke）这个函数，就像这样： `functionName();` 每次调用函数时，它都会在控制台上打印消息 `Hello World`。 每次调用函数时，大括号之间的所有代码都将被执行。

### 2.**将值传递给带有参数的函数**

函数的参数 （parameters）在函数调用中充当传入函数的输入占位符（也叫形参）。 函数调用时，参数可以为一个或多个。 调用函数时输入（或传递 "passed"）的实际值被称为参数（arguments）。

这是带有两个参数的函数，`param1` 和 `param2`：

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

然后我们可以调用 `testFun`，就像这样： `testFun("Hello", "World");`。 我们传入了两个字符串参数， `Hello` 和 `World`。 在函数中，`param1` 等于字符串 `Hello` 以及 `param2` 等于字符串 `World`。 请注意，`testFun` 函数可以多次调用，每次调用时传递的参数会决定参数的实际值。

### 3.**使用 return 给函数返回值**

我们可以通过函数的参数（arguments）把值传入函数， 也可以使用 `return` 语句把数据从一个函数中传出来。

**示例**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` 的值为 `8`。

`plusThree` 带有一个参数（argument）`num`，并返回（return）一个等于 `num + 3` 的值。

### 4.**全局作用域和函数**

在 JavaScript 中，作用域涉及到变量的作用范围。 在函数外定义的变量具有 全局 作用域。 这意味着，具有全局作用域的变量可以在代码的任何地方被调用。

未使用 `let` 或 `const` 关键字声明的变量会在 `global` 范围内自动创建。 当在代码其他地方无意间定义了一个变量，刚好变量名与全局变量相同，这时会产生意想不到的后果。 你应该总是用 `let` 或 `const` 声明你的变量。

### 5.**局部作用域和函数**

在一个函数内声明的变量，以及该函数的参数都具有局部（local）作用域。 这意味着它们只在该函数内可见。

这是在函数 `myTest` 内声明局部变量 `loc` 的例子：

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);

/*foo
Uncaught ReferenceError: loc is not definedat <anonymous>
未发现的参考错误：loc没有在<anonymous>中定义。*/
```

`myTest()` 函数调用将在控制台中显示字符串 `foo`。 `console.log(loc)` 行会产生一个错误，因为 `loc` 没有定义在函数之外。

### 6.**全局作用域和局部作用域**

一个程序中有可能具有相同名称的局部变量 和全局变量。 在这种情况下，局部变量将会优先于全局变量。

下面为例：

```JS
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

'Head'
```

函数 `myFun` 将会返回字符串 `Head`，因为局部变量的优先级更高。

### 7.**函数也可以返回 undefined**

函数一般用 `return` 语句来返回值，但这不是必须的。 在函数没有 `return` 语句的情况下，当你调用它时，该函数会执行内部代码，返回的值是 `undefined`。

**示例**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` 是一个没有 `return` 语句的函数。 该函数将更改全局变量 `sum`，函数的返回值为 `undefined`。

### 8.**使用返回值赋值**

如果你还记得我们在[使用赋值运算符存储值](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator)中的讨论的话，等号右侧的所有操作都会在赋值之前完成。 这意味着我们可以获取函数的返回值，并将其赋值给一个变量。

假设我们有一个预先定义的函数 `sum` ，它将两个数相加，然后：

```js
ourSum = sum(5, 12);
```

将调用 `sum` 函数，该函数返回 `17` 的值并将其分配给 `ourSum` 变量。

## 9.运算符

### 1.布尔值概述

另一种数据类型是布尔（Boolean）。 布尔值只能是两个值中的一个：`true` 或者 `false`。 它非常像电路开关，`true` 是 “开”，`false` 是 “关”。 这两种状态是互斥的。

**注意：** 布尔值是不带引号的。 字符串 `"true"` 和 `"false"` 不是布尔值，在 JavaScript 中也没有特殊含义。

### 2.**用 if 语句来表达条件逻辑**

`if` 语句用于在代码中做出决定。 关键字 `if` 告诉 JavaScript 在小括号中的条件为真的情况下去执行定义在大括号里面的代码。 这种条件被称为 `Boolean` 条件，因为他们只可能是 `true`（真）或 `false`（假）。

当条件的计算结果为 `true`，程序执行大括号内的语句。 当布尔条件的计算结果为 `false`，大括号内的代码将不会执行。

**伪代码**

 ```
 if（条件为真）{
 语句被执行
 }
 ```

**示例**

```js
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

`test(true)` 返回字符串 `It was true`，`test(false)` 返回字符串 `It was false`。

当 `test` 被调用，并且传递进来的参数值为 `true` 时，`if` 语句会计算 `myCondition` 的结果，看它是否为 `true`。 如果条件为 `true`，函数会返回 `It was true`。 当 `test` 被调用，并且传递进来的参数值为 `false` 时，`myCondition` *不* 为 `true`，并且不执行大括号后面的语句，函数返回 `It was false`。

### **3.相等运算符**

在 JavaScript 中，有很多 相互比较的操作。 所有这些操作符都返回一个 `true` 或 `false` 值。

最基本的运算符是相等运算符：`==`。 相等运算符比较两个值，如果它们是相等，返回 `true`，如果它们不相等，返回 `false`。 值得注意的是相等运算符不同于赋值运算符（`=`），赋值运算符是把等号右边的值赋给左边的变量。

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

如果 `myVal` 等于 `10`，相等运算符会返回 `true`，因此大括号里面的代码会被执行，函数将返回 `Equal`。 否则，函数返回 `Not Equal`。 在 JavaScript 中，为了让两个不同的数据类型（例如 `numbers` 和 `strings`）的值可以作比较，它必须把一种类型转换为另一种类型。 这叫作 “类型强制转换”。 转换之后，可以像下面这样来比较：

```js
1   ==  1
1   ==  2
1   == '1'
"3" ==  3
```

按顺序，这些表达式会返回 `true`、`false`、`true`、`true`。

### 4.严格相等

严格相等运算符（`===`）是相对相等操作符（`==`）的另一种比较操作符。 与相等操作符转换数据两类型不同，严格相等运算符不会做类型转换。

如果比较的值类型不同，那么在严格相等运算符比较下它们是不相等的，会返回 false 。

**示例**

```
3 ===  3
3 === '3'
```

这些条件将分别返回 `true` and `false`。

在第二个例子中，`3` 是一个 `Number` 类型，而 `'3'` 是一个 `String` 类型。

`3 == '3'` 返回 `true` ，因为 JavaScript 执行了从字符串到数字类型的转换。 `3 === '3'` 返回 false，因为类型不同且类型转换没有执行。

**提示** 在 JavaScript 中，你可以使用 `typeof` 运算符确定变量或值的类型，如下所示：

```
typeof 3
typeof '3'
```

`typeof 3` 返回字符串 `number`，`typeof '3'` 返回字符串 `string`。

### 5.**不等运算符**

不相等运算符（`!=`）与相等运算符是相反的。 这意味着不相等并返回 `false` 的地方，用相等运算符会返回 `true`，*反之亦然*。 与相等运算符类似，不相等运算符在比较的时候也会转换值的数据类型。

**例如**

```
1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
```

按顺序，这些表达式会返回 `true`、`false`、`false`、`false` 和 `false`。

### 6.**严格不等运算符**

严格不相等运算符（`!==`）与全等运算符是相反的。 这意味着严格不相等并返回 `false` 的地方，用严格相等运算符会返回 `true`，*反之亦然*。 严格不相等运算符不会转换值的数据类型。

**示例**

```
3 !==  3
3 !== '3'
4 !==  3
```

按顺序，这些表达式会返回 `false`、`true`、`true`。

### 7.**大于运算符**

使用大于运算符（`>`）来比较两个数字。 如果大于运算符左边的数字大于右边的数字，将会返回 `true`。 否则，它返回 `false`。

与相等运算符一样，大于运算符在比较的时候，会转换值的数据类型。

**例如：**

```
5   >  3
7   > '3'
2   >  3
'1' >  9
```

按顺序，这些表达式会返回 `true`、`true`、`false` 和 `false`。

### 8.**大于或等于运算符**

使用大于等于运算符（`>=`）来比较两个数字的大小。 如果大于等于运算符左边的数字比右边的数字大或者相等，会返回 `true`。 否则，会返回 `false`。

与相等运算符相似，大于等于运算符在比较的时候会转换值的数据类型。

**例如：**

```
6   >=  6
7   >= '3'
2   >=  3
'7' >=  9
```

按顺序，这些表达式会返回 `true`、`true`、`false` 和 `false`。

### 9.**小于运算符**

使用小于运算符（`<`）来比较两个数字。 如果小于运算符左边的数字比右边的数字小，它会返回 `true`。 否则会返回 `false`。 与相等运算符类似，小于运算符在做比较的时候会转换值的数据类型。

**例如：**

````
2   < 5
'3' < 7
5   < 5
3   < 2
'8' < 4
````

按顺序，这些表达式会返回 `true`、`true`、`false`、`false` 和 `false`。

### 10.**小于或等于运算符**

使用小于等于运算符（`<=`）比较两个数字的大小。 如果在小于等于运算符左边的数字小于或者等于右边的数字，它会返回 `true`。 如果在小于等于运算符左边的数字大于右边的数字，它会返回 `false`。 与相等运算符类似，小于或等于运算符会转换数据类型。

**例如**

```
4   <= 5
'7' <= 7
5   <= 5
3   <= 2
'8' <= 4
```

按顺序，这些表达式会返回 `true`、`true`、`true`、`false` 和 `false`。

## 10.逻辑

### 1.**逻辑与运算符**

有时你需要在一次判断中做多个操作。 当且仅当运算符的左边和右边都是 true，逻辑与运算符（`&&`）才会返回 `true`。

同样的效果可以通过 if 语句的嵌套来实现：

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

只有当 `num` 的值大于 `5` 并且小于`10` 时才会返回 `Yes`。 相同的逻辑可被写为：

````js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
````

### 2.**逻辑或运算符**

只要逻辑或运算符（`||`）两边的任何一个运算的结果是 `true`，则返回 `true`。 否则，返回 `false`。

逻辑或运算符由两个竖线（`||`）组成。 这个按键位于退格键和回车键之间。

下面这样的语句你应该很熟悉：

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

只有当 `num` 大于等于 `5` 或小于等于 `10` 时，函数才返回 `Yes`。 相同的逻辑可以简写成：

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

### 3.**else 语句**

当 `if` 语句的条件为真，会执行大括号里的代码。 那如果条件为假呢？ 正常情况下什么也不会发生。 使用 `else` 语句，可以执行当条件为假时相应的代码。

 ```js
 if (num > 10) {
   return "Bigger than 10";
 } else {
   return "10 or Less";
 }
 ```

### 4.**else if 语句**

如果你有多个条件语句，你可以通过 `else if` 语句把 `if` 语句链起来。

````js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
````

### 5.**if else 语句中的逻辑顺序**

`if`、`else if` 语句中的代码顺序是很重要的。

在条件判断语句中，代码的执行顺序是从上到下，所以你需要考虑清楚先执行哪一句，后执行哪一句。

这有两个例子。

第一个例子：

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

第二个例子更改了代码的执行顺序：

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

这两个函数看起来几乎一模一样，我们传一个值进去看看它们有什么区别。

````js
foo(0)
bar(0)
````

`foo(0)` 将返回字符串 `Less than one`，`bar(0)` 将返回字符串 `Less than two`。

### **6.多个 if else 语句**

`if/else` 语句串联在一起可以实现复杂的逻辑。 这是多个 `if` / `else if` 语句串联在一起的伪代码：

````js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
````

### 7.**Switch 从许多选项中选择**

如果你有非常多的选项需要选择，可以使用 switch 语句。 `switch` 评估一个表达式，将表达式的值与 case 子句匹配。 从第一个匹配的 `case` 值执行语句，直到遇到 `break`。

这是 `switch` 语句的示例：

```js
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

测试 `case` 值使用严格相等（`===`）运算符进行比较。 `break` 告诉 JavaScript 停止执行 switch 语句。 如果遗漏了 `break` ，下一个语句将会被执行。

### 8. switch 语句中添加默认选项

在 `switch` 语句中，你可能无法用 `case` 枚举出所有可能的值。 相反，你可以添加 `default` 语句，它会在找不到相匹配的 `case` 语句之后执行。 你可以把它看作是 `if/else` 链中最后的那个 `else` 语句。

`default` 语句应该被放到最后。

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

### 9.**Switch 语句添加多个相同选项**

果你忘了给 `switch` 的每一条 `case` 添加 `break`，那么后续的 `case` 会一直执行，直到遇见 `break` 为止。 如果你想为 `switch` 中的多个不同的输入设置相同的结果，可以这样写：

```js\
let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

这样，1、2、3 都会有相同的结果。

### 10.**用一个 Switch语句来替代多个if else语句**

如果你有几个选项需要选择，`switch`语句写起来会比一些容易的`if`/`else if`容易些。

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

可以被下面替代：

```js
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

### **11.从函数返回布尔值**

你应该还记得[相等运算符](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)这道挑战题。 在那里我们提到，所有比较操作符都会返回 boolean：要么是 `true` 要么是 `false`。

有时人们通过 `if/else` 语句来做比较，像这样。

````js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
````

但有更好的方式来达到相同的效果。 既然 `===` 返回 `true` 或 `false` 我们可以直接返回比较结果：

```js
function isEqual(a, b) {
  return a === b;
}
```

### 12.**函数执行 return 语句结束**

当代码执行到 `return` 语句时，函数返回一个结果就结束运行了，return 后面的语句不会执行。

**示例**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

以上将在控制台中显示字符串 `Hello` 并返回字符串 `World`。 字符串 `byebye` 将永远不会在控制台中显示，因为函数在 `return` 语句处就退出了。

## 11.对象

### 1.**创建 JavaScript 对象**

你之前可能听过 `object` 这个词。

对象和 `arrays` 类似，区别在于数组使用索引来访问和修改数据，而对象中的数据是通过 `properties` 访问的。

对象非常适合用来存储结构化数据，可以表示真实世界中的物体，比如一只猫。

这里是一个猫对象的样本：

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

在此示例中，所有属性都存储为字符串，例如 `name`、`legs` 和 `tails`。 然而，你也可以使用数字作为属性。 你甚至可以省略单字字符串属性中的引号，如下所示：

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

然而，如果你的对象有非字符串属性的话，JavaScript 会自动将它们转为字符串。

### 2.**通过点号表示法访问对象属性**

和访问数组类似，访问对象属性有两种方式：点号表示法（`.`）和方括号表示法（`[]`）。

如果我们已经提前知道要访问的属性名，使用点号表示法是最方便的。

这里是一个用点符号（`.`）读取对象属性的示例：

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

使用点号读取 `testObj` 的属性值。 将变量 `hatValue` 的值设置为该对象的 `hat` 属性的值，并将变量 `shirtValue` 的值设置为该对象的 `shirt` 属性的值。

### 3.**使用方括号访问对象属性**

访问对象属性的第二种方式是方括号表示法（`[]`）。 如果你想访问的属性名中包含空格，就必须使用方括号表示法来获取它的属性值。

当然，如果属性名不包含空格，也可以使用方括号表示法。

这是一个使用方括号表示法读取对象属性的例子

```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

`myObj["Space Name"]` 将会是字符串 `Kirk`，`myObj['More Space']` 将会是字符串 `Spock`，并且`myObj["NoSpace"]` 将会是字符串 `USS Enterprise`。

注意，如果属性名中包含空格，就必须使用引号（单引号或双引号）将它们包裹起来。

### 4.**通过变量访问对象属性**

对对象上使用方括号表示法，还可以访问对象上作为变量值存储的属性。 当你需要遍历对象的所有属性，或者根据一个变量的值查找对应的属性值时，这种写法尤其适用。

以下是一个使用变量来访问属性的例子：

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```

字符串 `Doberman` 将会出现在控制台中。

使用这一概念的另一种情况是：属性的名字是在程序运行期间动态收集得到的。如下所示：

```js
const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
```

`someProp` 的值将为字符串 `propName`，并且字符串 `John` 将会出现在控制台中。

注意，当使用变量名访问属性时，我们*没有*使用引号包裹它，因为我们正在使用的是变量的*值*，而不是变量的*名字*。

### 5.更新对象属性

在你创建了 JavaScript 对象后，你可以随时更新它的属性，就像更新任何其他变量那样。 你可以使用点或中括号操作符来更新。

举个例子，让我们看看 `ourDog`：

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

既然他是一个特别愉快的狗，让我们将他的名字更改为字符串 `Happy Camper`。 这有两种方式来更新对象的 name 属性： `ourDog.name = "Happy Camper";` 或 `ourDog["name"] = "Happy Camper";`。更新后，`ourDog.name` 的值就不再是 `Camper`，而是 `Happy Camper`。

### 6.**给对象添加新属性**

你也可以像更改属性一样给 JavaScript 对象添加属性。

这里展示了如何给 `ourDog` 添加一个属性 `bark`：

```js
ourDog.bark = "bow-wow";
```

或者

```js
ourDog["bark"] = "bow-wow";
```

现在，当我们执行 `ourDog.bark` 时，就能得到他的叫声，`bow-wow`。

例如：

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

给 `myDog` 添加一个属性 `bark` ，并将其设置为狗的声音，比如 “woof“。 可以使用点操作符或者中括号操作符。

### 7.**删除对象的属性**

我们同样可以删除对象的属性，例如：

```js
delete ourDog.bark;
```

例如：

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

在上面代码的最后一行中，`ourDog` 是这样的：

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

删除 `myDog` 对象的 `tails` 属性。 可以使用点操作符或者中括号操作符。

### 8.**使用对象进行查找**

对象和字典一样，可以用来存储键/值对。 如果数据是扁平的，你可以用对象来查找你想要的值，而不是链式使用 `switch` 或 `if/else` 语句。 当你知道你的输入数据在某个范围时，这种查找方式极为有效。

这是简单的反向字母表：

```js
const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];
```

`alpha[2]` 是字符串 `Y`，`alpha[24]` 是字符串 `C`，`alpha[value]` 是字符串 `Y`。

### 9.**测试对象的属性**

有时检查一个对象属性是否存在是非常有用的。 我们可以用对象的 `.hasOwnProperty(propname)` 方法来检查对象是否有指定的属性。 `.hasOwnProperty()` 找到该属性时返回 `true`，找不到该属性时返回 `false`。

**示例**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

第一个`hasOwnProperty`返回`true`，第二个返回`false`。

### 10.**操作复杂的对象**

有时你可能希望将数据存储在一个灵活的数据结构（Data Structure）中。 JavaScript 对象是一种灵活的数据结构。 它可以储存字符串（strings）、数字（numbers）、布尔值（booleans）、数组（arrays）、函数（functions）和对象（objects）以及这些值的任意组合。

这是一个复杂数据结构的示例：

```js
const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

这是一个包含一个对象的数组。 该对象有关于专辑的各种元数据（metadata）。 它也有一个嵌套的 `formats` 数组。 可以将专辑添加到顶级数组来增加更多的专辑记录。 对象将数据以一种键 - 值对的形式保存。 在上面的示中，`"artist": "Daft Punk"` 有一个键为 `artist` 值为 `Daft Punk` 的属性。 [JavaScript Object Notation](http://www.json.org/) 简称 `JSON` 是可以用于存储数据的数据交换格式。

```
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

**提示：**数组中有多个 JSON 对象的时候，对象与对象之间要用逗号隔开。

### **11.访问对象**

我们可以通过连续使用点号表示法和方括号表示法来访问对象的嵌套属性。

这是一个嵌套对象：

```js
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
```

`ourStorage.cabinet["top drawer"].folder2` 将会是字符串 `secrets`，并且 `ourStorage.desk.drawer` 将会是字符串 `stapler`。

### **12.访问嵌套数组**

在之前的挑战中，我们学习了在对象中嵌套对象和数组。 与访问嵌套对象类似，数组的方括号可以用来对嵌套数组进行链式访问。

下面是访问嵌套数组的例子：

```js
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
```

`ourPets[0].names[1]` 应该是字符串 `Fluffy`， 并且 `ourPets[1].names[0]` 应该是字符串 `Spot`。

## 12**循环**

### 1.**while 循环**

可以使用循环多次执行相同的代码。

我们将学习的第一种类型的循环称为 `while` 循环，当 while 指定的条件为真，循环才会执行，反之不执行。

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

在上面的代码里，`while` 循环执行 5 次把 0 到 4 的数字添加到 `ourArray` 数组里。

让我们通过 while 循环将值添加到数组中。

### 2.for  循环

你可以使用循环多次执行相同的代码。

JavaScript 中最常见的循环就是 `for`，它可以循环指定次数。

for 循环中的可选三个表达式用分号隔开：

`for (a; b; c)`，其中`a`为初始化语句，`b`为条件语句，`c` 是最终的表达式。

初始化语句只会在执行循环开始之前执行一次。 它通常用于定义和设置你的循环变量。

循环条件语句会在每一轮循环的开始前执行，只要条件判断为 `true` 就会继续执行循环。 当条件为 `false` 的时候，循环将停止执行。 这意味着，如果条件在一开始就为 false，这个循环将不会执行。

终止循环表达式在每次循环迭代结束， 在下一个条件检查之前时执行，通常用来递增或递减循环计数。

在下面的例子中，先初始化 `i = 0`，条件 `i < 5` 为 true 时，进入循环。 每次循环后 `i` 的值增加 `1`，然后执行终止循环条件表达式 `i++`。

 ```js
 const ourArray = [];
 
 for (let i = 0; i < 5; i++) {
   ourArray.push(i);
 
 ```

`ourArray` 现在的值为 `[0, 1, 2, 3, 4]`。

### 3.**使用 For 循环遍历数组的奇数**

对于循环，一次不必递增一个。 通过更改我们的 `final-expression`，我们可以用偶数来计数。

初始化 `i = 0`，当 `i < 10` 的时候继续循环。 `i += 2` 让 `i` 每次循环之后增加 2。

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` 现在将包含 `[0, 2, 4, 6, 8]`。 改变计数器（`initialization`） ，这样我们可以用奇数来递增。

### 4.**使用 For 循环反向遍历数组**

只要我们定义好合适的条件，for 循环也可以反向遍历。

为了让每次递减 2，我们需要改变 initialization、condition 和 final-expression。

设置 `i = 10`，并且当 `i > 0` 的时候才继续循环。 我们使用 `i -= 2` 来让 `i` 每次循环递减 2。

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` 现在将包含 `[10, 8, 6, 4, 2]`。 让我们改变初始值和最后的表达式，这样我们就可以按照奇数从后往前两两倒着数。

### 5 .**使用 For 循环遍历**

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

记住数组的索引从零开始的，这意味着数组的最后一个元素的下标是：`length - 1`（数组的长度-1）我们这个循环的条件是`i < arr.length`，当`i`的值为`length`。的时候循环就停止了在中，最后一个循环`i === 4`，例如，当`i`的值是`arr.length - 1`时间，结果输出`6`。因为`i`这个`5`循环会终止，`i < arr.length`是`false`。

### **6.循环变量**

如果你有一个二维数组，可以使用相同的逻辑，先遍历外面的数组，再遍历里面的子数组。 下面是一个例子：

```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

这里一次输出了 `arr` 中的每个子元素。 提示，对于内部循环，我们可以通过 `arr[i]` 的 `.length` 来获得子数组的长度，因为 `arr[i]` 本身就是一个数组。

### 7.**do...while 循环**

下一种循环叫作 `do...while` 循环。 它被称为 `do...while` 循环，是因为不论什么情况，它都会首先 `do`（运行）循环里的第一部分代码，然后 `while`（当）规定的条件被评估为 `true`（真）的时候，它会继续运行循环。

```js
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

```js
} while (i < 5);
```

上面的示例行为类似于其他类型的循环，由此产生的数组将看起来像 `[0, 1, 2, 3, 4]`。 然而，`do...while` 不同于其他循环的地方，是第一次循环检查失败时的行为。 让我们看看代码中的区别：这里是一个常规的 `while` 循环，只要 `i < 5`，就会在循环中运行代码：

```js
const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

这个例子中，定义了一个空数组 `ourArray` 以及一个值为 5 的 `i` 。 当执行 `while` 循环时，因为 `i` 不小于 5，所以循环条件为 `false`，循环内的代码将不会执行。 `ourArray` 最终没有添加任何内容，因此示例中的所有代码执行完时，ourArray 仍然是`[]`。 现在，看一下 `do...while` 循环。

```js
const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

在这里，和使用 `while` 循环一样，将 `i` 的值初始化为 5。 执行下一行时，没有执行循环检查，直接执行花括号内的代码。 数组会添加一个元素，并在进行条件检查之前递增 `i`。 然后，在条件检查时因为 `i` 等于 6 不符合条件 `i < 5`，所以退出循环。 最终 `ourArray` 的值是 `[5]`。 本质上，`do...while` 循环确保循环内的代码至少运行一次。 让我们通过 `do...while` 循环将值添加到数组中。

### 8.**使用递归代替循环**

递归是函数调用自身的操作。 为了便于理解，有如下任务：计算数组内元素前 `n` 的元素乘积。 使用 `for` 循环， 可以这样做：

```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

下面是递归写法，注意代码里的 `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`。 这意味着可以重写 `multiply` 以调用自身而无需依赖循环。

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

递归版本的 `multiply` 详述如下。 在 base case 里，也就是 `n <= 0` 时，返回 1。 在 `n` 比 0 大的情况里，函数会调用自身，参数 n 的值为 `n - 1`。 函数以相同的方式持续调用 `multiply`，直到 `n <= 0` 为止。 所以，所有函数都可以返回，原始的 `multiply` 返回结果。

**注意：** 递归函数在没有函数调用时（在这个例子是，是当 `n <= 0` 时）必需有一个跳出结构，否则永远不会执行完毕。

### 9.for in 循环

```js
b = {x:1,y:2,z:3}
for (let a in b) {
    console.log(a)
  }

控制台输出：
x
y
z
```

let a 为新建的容器项，事实上就是遍历b里面的对象，赋值给a 只能在对象上使用

### 10.for of循环

```js
b = [1,2,3,4,5]
for (let a of b) {
    console.log(a)
  }

控制台输出：
1
2
3
4
5
```

遍历b里面的每一项，重复赋值给a，然后输出至控制台

## 13.**使用 JavaScript 生成随机分数**

### 1.**生成随机分数**

随机数非常适合用来创建随机行为。

在 JavaScript 中，可以用 `Math.random()` 生成一个在`0`（包括 0）到 `1`（不包括 1）之间的随机小数。 因此 `Math.random()` 可能返回 `0`，但绝不会返回 `1`。

**提示：**[使用赋值运算符存储值](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator)这一节讲过，所有函数调用将在 `return` 执行之前结束，因此我们可以 `return`（返回）`Math.random()` 函数的值。

### 2.**生成随机整数**

生成随机小数很棒，但随机数更有用的地方在于生成随机整数。

1. 用 `Math.random()` 生成一个随机小数。
2. 把这个随机小数乘以 `20`。
3. 用 `Math.floor()` 向下取整，获得它最近的整数。

记住 `Math.random()` 永远不会返回 `1`。同时因为我们是在向下取整，所以最终我们获得的结果不可能有 `20`。 这确保了我们获得了一个在 `0` 到 `19` 之间的整数。

把操作连缀起来，代码类似于下面：

```js
Math.floor(Math.random() * 20);
```

我们先调用 `Math.random()`，把它的结果乘以 20，然后把上一步的结果传给 `Math.floor()`，最终通过向下取整获得最近的整数。

## 14.**使用 parseInt 函数**

### 1.**使用 parseInt 函数**

parseInt()` 函数解析一个字符串返回一个整数。 下面是一个示例：

```js
const a = parseInt("007");
```

上述函数将字符串 `007` 转换为整数 `7`。 如果字符串中的第一个字符不能转换为数字，则返回 `NaN`。

### 2.**使用 parseInt 并传入基数**

`parseInt()` 函数解析一个字符串并返回一个整数。 它还可以传入第二个参数，指定了字符串中数字的基数。 基数可以是 2 到 36 之间的整数。

函数调用如下所示：

```js
parseInt(string, radix);
```

这是一个示例：

```js
const a = parseInt("11", 2);
```

变量 radix 表示 `11` 是在二进制系统中。 这个示例将字符串 `11` 转换为整数 `3`。
