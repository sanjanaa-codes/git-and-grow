
1. **Big-O Notation** describes how algorithm runtime grows as input size (*n*) grows—focuses on upper bounds.
2. Common categories:

   * **O(1)** – constant time (e.g., accessing an array element)
   * **O(n)** – linear time (e.g., a single loop through items)
   * **O(n²)** – quadratic time (e.g., nested loops)
3. Helps compare algorithms by ignoring constant multipliers, focusing on how they *scale*.
4. Example: doubling `n` in O(n) doubles time; in O(n²) quadruples it.
5. Useful for identifying performance bottlenecks in your code—as input grows, choose more efficient algorithms.

---

👶 Explained Like You’re 10

Imagine you’re sorting toys on the floor:

* If you just pick **one toy**, that’s super quick—no matter how many are there (that’s **O(1)**).
* If you **go through all toys once**, that takes longer with more toys—that’s **O(n)**.
* If you **look at each pair of toys** to check them twice, it gets much slower—that’s **O(n²)**.

So Big-O is like measuring *how hard* a toy task gets when you get more toys—helps you decide the best way to sort them without wasting time!

---

🔍 Let me know if you'd like example comparisons—like binary search vs. linear search, or practical uses in web-dev!
