JavaScript: Array Method - `.map()`

## 🔑 Concept

The **`.map()`** method creates a **new array** by applying a **callback function** to each element of the original array, leaving the original array untouched ([developer.mozilla.org][1]).

## 🛠 Syntax & Parameters

```js
const newArray = arr.map((element, index, array) => {
  // return transformed element
});
```

* **element**: current array item
* **index**: its position (0-based)
* **array**: original array reference
* Optional **thisArg**: sets the `this` context inside the callback ([developer.mozilla.org][1], [thelinuxcode.com][2], [www-igm.univ-mlv.fr][3])

## 🧪 Example

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // → [2, 4, 6]
console.log(numbers); // → [1, 2, 3] (unchanged)
```

Transforms each value without modifying the source array .

## ⚡ Why It Matters

* **Immutability**: returns a new array, avoiding unintended side effects ([thelinuxcode.com][2])
* **Readability**: concise transformation with fewer lines than a loop ([thelinuxcode.com][2])
* **Chainable**: works smoothly with `.filter()`, `.reduce()`, etc. ([thelinuxcode.com][2])
* **Performance**: optimized by JS engines for common transformations ([developer.mozilla.org][1])

## 📌 Common Pitfalls

* Calling `.map()` **without using its return value** – use `.forEach()` for side-effects ([www-igm.univ-mlv.fr][3])
* **Misusing built-in functions** like `parseInt`:

  ```js
  ["1", "2", "3"].map(parseInt); // → [1, NaN, NaN]
  ```

  Because `parseInt` expects a radix, and `map()` passes additional parameters&#x20;

## ✨ Additional Tips

* Skip empty array slots—`.map()` ignores unassigned indices ([developer.mozilla.org][1])
* Can be used on “array-like” objects via `Array.prototype.map.call(...)`&#x20;

---

## ✅ Summary

* **Use `.map()`** when you want to transform every element into a new array.
* **Better than loops** for readability and immutability.
* Watch out for lazy uses and ensure you return the result.

---

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?utm_source=chatgpt.com "Array.prototype.map () - JavaScript | MDN - MDN Web Docs"
[2]: https://thelinuxcode.com/map-array-in-javascript-array-map-method/?utm_source=chatgpt.com "How to Map Arrays in JavaScript with Array.map () – A Detailed Guide"
[3]: https://www-igm.univ-mlv.fr/~forax/MDN/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map.html?utm_source=chatgpt.com "Array.prototype.map() - JavaScript | MDN - www-igm.univ-mlv.fr"
