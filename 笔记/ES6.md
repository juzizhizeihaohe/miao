## ES6

### 1.**比较 var 和 let 关键字的作用域**

如果你不熟悉 `let`，请查看 [这个挑战](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords)。

使用 `var` 关键字声明变量时，它是全局声明的，如果在函数内部声明则是局部声明的。

`let` 关键字的行为类似，但有一些额外的功能。 在代码块、语句或表达式中使用 `let` 关键字声明变量时，其作用域仅限于该代码块、语句或表达式。

例如：

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

此处控制台将显示值 `[0, 1, 2]` 和 `3`。

使用 `var` 关键字，`i` 是全局声明的。 所以当 `i++` 被执行时，它会更新全局变量。 此代码类似于以下内容：

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

此处控制台将显示值 `[0, 1, 2]` 和 `3`。

如果你创建一个函数，将它存储起来，稍后在使用 `i` 变量的 `for` 循环中使用。这么做可能会出现问题。 这是因为存储的函数将始终引用更新后的全局 `i` 变量的值。

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

此处控制台将显示值 `3`。

可以看到，`printNumTwo()` 打印了 3 而不是 2。 这是因为赋值给 `i` 的值已经更新，`printNumTwo()` 返回全局的 `i`，而不是在 for 循环中创建函数时 `i` 的值。 `let` 关键字就不会出现这种现象：

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

在这里控制台将显示值 `2` 和一个错误提示 `i is not defined`。

`i` 未定义，因为它没有在全局范围内声明。 它只在 `for` 循环语句中被声明。 `printNumTwo()` 返回了正确的值，因为 `let` 关键字创建了三个具有唯一值（0、1 和 2）的不同 `i` 变量在循环语句中。

### 2.**改变一个用 const 声明的数组**

如果你不熟悉 `const`，请查看[这个挑战](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword)。

`const` 声明在现代 JavaScript 中有很多用例。

默认情况下，一些开发人员更喜欢使用 `const` 分配所有变量，除非他们知道需要重新分配值。 只有在这种情况下，他们才使用 `let`。

但是，重要的是要了解使用 `const` 分配给变量的对象（包括数组和函数）仍然是可变的。 使用 `const` 声明只能防止变量标识符的重新分配。

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` 将导致错误。 `console.log` 将显示值 `[5, 6, 45]`。

如你所见，你可以改变对象 `[5, 6, 7]` 本身，变量 `s` 仍将指向更改后的数组 `[5, 6, 45]`。 像所有数组一样，`s` 中的数组元素是可变的，但是因为使用了 `const`，所以不能使用变量标识符 `s` 来指向一个使用赋值运算符的不同数组。

### 3.**防止对象改变**

通过之前的挑战可以看出，`const` 声明并不会真的保护数据不被改变。 为了确保数据不被改变，JavaScript 提供了一个函数 `Object.freeze`。

任何更改对象的尝试都将被拒绝，如果脚本在严格模式下运行，将抛出错误。

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

`obj.review` 和 `obj.newProp` 赋值将导致错误，因为我们的编辑器默认在严格模式下运行，控制台将显示值 `{ name: "FreeCodeCamp", review: "Awesome" }`。

### 4.**箭头函数编写简洁的匿名函数**

在 JavaScript 里，我们会经常遇到不需要给函数命名的情况，尤其是在需要将一个函数作为参数传给另外一个函数的时候。 这时，我们会创建匿名函数。 因为这些函数不会在其他地方复用，所以我们不需要给它们命名。

这种情况下，我们通常会使用以下语法：

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 提供了其他写匿名函数的方式的语法糖。 你可以使用**箭头函数**：

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

当不需要函数体，只返回一个值的时候，箭头函数允许你省略 `return` 关键字和外面的大括号。 这样就可以将一个简单的函数简化成一个单行语句。

```js
const myFunc = () => "value";
```

这段代码默认会返回字符串 `value`。

### 5.**编写带参数的箭头函数**

和一般的函数一样，你也可以给箭头函数传递参数。

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` 将返回 `8`。

如果箭头函数只有一个参数，则可以省略参数外面的括号。

```js
const doubler = item => item * 2;
```

可以给箭头函数传递多个参数。

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` 将返回 `8`。

### 6.**设置函数的默认参数**

ES6 里允许给函数传入默认参数，来构建更加灵活的函数。

请看以下代码：

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

控制台将显示字符串 `Hello John` 和 `Hello Anonymous`。

默认参数会在参数没有被指定（值为 undefined）的时候起作用。 在上面的例子中，参数 `name` 会在没有得到新的值的时候，默认使用值 `Anonymous`。 你还可以给多个参数赋予默认值。

### 7.** rest 操作符与函数一起使用**

ES6 推出了用于函数参数的 rest 操作符帮助我们创建更加灵活的函数。 rest 操作符可以用于创建有一个变量来接受多个参数的函数。 这些参数被储存在一个可以在函数内部读取的数组中。

请看以下代码：

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

控制台将显示字符串 `You have passed 3 arguments.` 和 `You have passed 4 arguments.`。

使用 rest 参数，就不需要查看 `args` 数组，并且允许我们在参数数组上使用 `map()`、`filter()` 和 `reduce()`。