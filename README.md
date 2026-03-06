1️⃣. **What is the difference between var, let, and const?**
==> JavaScript-এ var, let, এবং const তিনটিই variable declare করার জন্য ব্যবহার করা হয়।
Variable মানে হলো এমন একটি জায়গা যেখানে আমরা কোন তথ্য (data) রেখে দিই।

Example-

let,
 age = 15;
 এখানে age নামে একটি variable এ 15 রাখা হয়েছে।

 **var:**

-> পুরনো নিয়ম।

-> একই নাম আবার ব্যবহার করা যায়।

  var x = 10;
  var x = 20;   // আবার অন্য value দেওয়া যাবে

**let:**

-> নতুন নিয়ম

-> value বদলানো যায়, কিন্তু একই নাম আবার বানানো যায় না । 

```let,
 x = 10;
 x = 20;   // value change করা যায়...
```
**const:**

একবার value দিলে আর বদলানো যায় না।

```const x = 10;
x = 20;   // যদি value change করা হয় তবে error আসবে ...
```

2️⃣**What is the spread operator (...)?**


==> Spread operator (...) এমন একটি জিনিস যা একসাথে থাকা অনেকগুলো জিনিসকে আলাদা করে ছড়িয়ে দেয়।

ধরি,

 একটি array আছে:

```const numbers = [1, 2, 3];```

এখন যদি লিখি:

```console.log(...numbers);```

তাহলে output হবে:

```1  2  3```

কারণ (...) array এর ভেতরের সব সংখ্যা ছড়িয়ে আলাদা করে দিয়েছে। 




3️⃣ **What is the difference between map(), filter(), and forEach()?**

==> এই তিনটিই JavaScript-এ array এর উপর কাজ করার জন্য ব্যবহার হয়।

ধরি,

 একটি array আছে:

```const numbers = [1, 2, 3, 4];```


**forEach():**

forEach ব্যবহার করা হয় প্রতিটা item এক এক করে দেখার বা কাজ করার জন্য।

Example:

```
numbers.forEach(num => {
  console.log(num);
});
```
Output:
```1
2
3
4
```

শুধু এক এক করে কাজ করে, নতুন array বানায় না।

 
 **map():**

map() ব্যবহার করা হয় যখন আমরা array এর প্রতিটা item পরিবর্তন করে নতুন array বানাতে চাই।

**Example:**

```const newNumbers = numbers.map(num => num * 2);```

Result:

```[2, 4, 6, 8]```

এখানে map() নতুন array তৈরি করেছে 



**filter():**

filter() ব্যবহার করা হয় শুধু কিছু নির্দিষ্ট item বেছে নেওয়ার জন্য।

**Example:**

`const bigNumbers = numbers.filter(num => num > 2);`

Result:

`[3, 4]`

 filter() condition অনুযায়ী item বেছে নেয়।





4️⃣ **What is an arrow function?**


==> Arrow function হলো function লেখার সহজ ও ছোট উপায়।

JavaScript-এ আমরা কোনো কাজ করার জন্য function ব্যবহার করি।

আগে function এভাবে লেখা হতো.......

```
function add(a, b) {
  return a + b;
}
```

আর এখন arrow function এভাবে লেখা হয়.....
```
const add = (a, b) => a + b;
```



5️⃣ **What are template literals?**



==> Template literals হলো JavaScript-এ string লেখার সহজ পদ্ধতি।

এতে আমরা string এর ভিতরে সরাসরি variable বসাতে পারি।

আগে যেভাবে লিখতাম.....
```
const name = "Rahim";
const text = "Hello " + name;
```
Output:

`Hello Rahim`

Template literal ব্যবহার করলে

```
const name = "Rahim";
const text = `Hello ${name}`;
```

Output:
```
Hello Rahim
```

Backtick (` `) + ${} ব্যবহার করে string লিখলে সেটাকে Template Literal বলে।