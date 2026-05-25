---
title: "Python Grammar Basic"
date: 2025-04-25
tags: ["Python", "Data Science", "Bioinformatics", "Cheatsheet"]
categories: ["Coding Notes"]
description: "Comprehensive Python reference covering data types, control structures, functions, NumPy, Pandas, OOP, and bioinformatics patterns."
---

## 1. Data Types and Structures

```python
# Basic data types
x = 42              # int
y = 3.14            # float
z = True            # bool (True/False, note capitalization)
s = "text"          # str (string)
s2 = 'text'         # single quotes also work
s3 = """multi
line"""             # triple quotes for multiline

# Type checking and conversion
type(x)             # get type
isinstance(x, int)  # check type
int("42")           # convert to int
float("3.14")       # convert to float
str(42)             # convert to string
```

> Python is dynamically typed. Everything is an object. Use `type()` for type checking, `isinstance()` for inheritance-aware checking.

```python
# Lists (ordered, mutable, heterogeneous)
lst = [1, 2, 3, 4, 5]
lst2 = [1, "text", 3.14, True]        # mixed types
lst4 = [x**2 for x in range(5)]       # list comprehension

# List operations
len(lst)            # length
lst.append(6)       # add to end
lst.extend([7, 8])  # add multiple
lst.insert(0, 0)    # insert at position
lst.remove(3)       # remove first occurrence
lst.pop()           # remove and return last
lst.sort()          # sort in place
sorted(lst)         # return sorted copy
```

> Lists are Python's workhorse. Mutable and flexible. Use list comprehensions for concise creation.

```python
# Tuples (ordered, immutable)
tup = (1, 2, 3)
tup2 = 1, 2, 3      # parentheses optional
tup3 = (1,)         # single element (note comma)

# Sets (unordered, unique, mutable)
s = {1, 2, 3, 4, 5}
s.add(6)            # add element
s.remove(3)         # remove (error if not exists)
s.discard(3)        # remove (no error)

# Set operations
s1 | s2             # union
s1 & s2             # intersection
s1 - s2             # difference
```

> Sets for unique collections and fast membership testing. Unordered, so no indexing.

```python
# Dictionaries (key-value pairs, mutable)
d = {"a": 1, "b": 2, "c": 3}
d2 = dict(a=1, b=2, c=3)              # keyword args
d4 = {k: v**2 for k, v in zip(["a", "b"], [1, 2])}  # dict comprehension

# Dictionary operations
d["a"]              # access by key (error if missing)
d.get("a")          # access by key (None if missing)
d.get("z", 0)       # with default value
d["d"] = 4          # add/update
d.update({"e": 5})  # update from dict
del d["a"]          # delete key
d.keys()            # get keys
d.values()          # get values
d.items()           # get (key, value) pairs
```

> Dictionaries are fast hash tables. Keys must be immutable. Python 3.7+ preserves insertion order.

```python
# None type
x = None            # null/missing value
x is None           # check for None (use 'is', not ==)
```

---

## 2. Indexing and Slicing

```python
# Indexing (0-based)
lst = [10, 20, 30, 40, 50]
lst[0]              # first element
lst[-1]             # last element

# Slicing [start:stop:step]
lst[1:4]            # elements 1-3 (stop excluded)
lst[:3]             # first 3
lst[3:]             # from 3 to end
lst[::2]            # every 2nd element
lst[::-1]           # reverse

# Multiple assignment
a, b = 1, 2         # tuple unpacking
a, b = b, a         # swap values
first, *rest = [1, 2, 3, 4]  # first=1, rest=[2,3,4]
```

> Python uses 0-based indexing. Negative indices count from end. Slicing is `[start:stop:step]` where stop is excluded.

---

## 3. Operators

```python
# Arithmetic operators
x + y               # addition
x - y               # subtraction
x * y               # multiplication
x / y               # division (float)
x // y              # floor division (integer)
x % y               # modulo
x ** y              # exponentiation

# Comparison operators
x == y              # equal
x != y              # not equal
1 < x < 10          # chained comparison

# Logical operators
x and y             # logical AND (not &&)
x or y              # logical OR
not x               # logical NOT

# Membership
x in lst            # check if x in list
x not in lst        # check if x not in list

# Identity
x is y              # same object
x is not y          # different objects
```

> Use `and`/`or`/`not` (not `&&`/`||`/`!`). Use `is` for None and singleton comparisons, `==` for value equality.

---

## 4. Control Structures

```python
# If-elif-else
if condition:
    pass
elif another_condition:
    pass
else:
    pass

# Ternary operator
x = value_if_true if condition else value_if_false

# For loops
for i in range(10):         # 0 to 9
    pass

for i in range(5, 10):      # 5 to 9
    pass

for idx, item in enumerate(lst):  # with index
    pass

for key, value in d.items():  # iterate over items
    pass

for x, y in zip(list1, list2):  # parallel iteration
    pass

# While loops
while condition:
    pass

# Loop control
break               # exit loop
continue            # skip to next iteration

# Else clause (executes if loop completes normally)
for item in lst:
    if item == target:
        break
else:
    print("Not found")
```

> Indentation defines blocks (4 spaces standard). `range(stop)` or `range(start, stop, step)`. `else` after loops runs if no `break` occurred.

```python
# Comprehensions
[x**2 for x in range(10)]
[x for x in range(10) if x % 2 == 0]
{k: v**2 for k, v in d.items()}
{x**2 for x in range(10)}

# Generator expression (memory efficient)
(x**2 for x in range(1000000))
```

> Comprehensions are Pythonic and fast. Use generator expressions for large sequences to save memory.

---

## 5. Functions

```python
# Function definition
def my_function(arg1, arg2, arg3=default):
    """Docstring describing function."""
    result = arg1 + arg2 + arg3
    return result

# Multiple return values
def func():
    return x, y, z      # returns tuple

a, b, c = func()        # unpack

# Default mutable arguments (GOTCHA!)
def bad_func(lst=[]):       # AVOID: default is shared
    lst.append(1)
    return lst

def good_func(lst=None):    # CORRECT: use None
    if lst is None:
        lst = []
    lst.append(1)
    return lst
```

> Never use mutable defaults (list, dict). They're shared across calls. Use None and initialize inside.

```python
# Variable arguments
def func(*args):            # positional args as tuple
    for arg in args:
        print(arg)

def func(**kwargs):         # keyword args as dict
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Lambda functions
square = lambda x: x**2
sorted(lst, key=lambda x: x[1])

# Type hints (Python 3.5+)
def func(x: int, y: str = "default") -> float:
    return float(x)

from typing import List, Dict, Optional
def func(lst: List[int]) -> Dict[str, int]:
    pass
```

> `*args` captures extra positional arguments, `**kwargs` captures extra keyword arguments. Lambdas are single-expression functions.

---

## 6. String Operations

```python
# String methods
s.lower()           # to lowercase
s.upper()           # to uppercase
s.strip()           # remove leading/trailing whitespace
s.replace("old", "new")  # replace substring
s.split()           # split by whitespace
s.split(",")        # split by delimiter
",".join(lst)       # join list with separator
s.startswith("pre") # check prefix
s.endswith("suf")   # check suffix
s.find("sub")       # find substring (returns index or -1)
s.count("sub")      # count occurrences
```

> Strings are immutable. Methods return new strings.

```python
# String formatting
# f-strings (Python 3.6+, preferred)
name = "Alice"
age = 30
f"My name is {name} and I'm {age} years old"
f"Result: {value:.2f}"      # format specifier

# format method
"My name is {} and I'm {}".format(name, age)

# Regular expressions
import re
re.match(pattern, string)       # match at beginning
re.search(pattern, string)      # search anywhere
re.findall(pattern, string)     # find all matches
re.sub(pattern, repl, string)   # replace

# Common patterns
r"\d+"          # one or more digits
r"\w+"          # one or more word characters
r"\s+"          # one or more whitespace
r"^start"       # start of string
r"end$"         # end of string
```

> f-strings are fastest and most readable. Use raw strings `r""` for regex patterns.

---

## 7. File I/O

```python
# Reading files (context manager preferred)
with open("file.txt", "r") as f:
    content = f.read()          # read entire file
    
with open("file.txt", "r") as f:
    for line in f:              # iterate line by line (memory efficient)
        process(line)

# Writing files
with open("file.txt", "w") as f:  # 'w' overwrites
    f.write("text\n")

with open("file.txt", "a") as f:  # 'a' appends
    f.write("appended text\n")

# Binary mode
with open("file.bin", "rb") as f:  # read binary
    data = f.read()

# CSV files
import csv
with open("data.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["column_name"])

with open("data.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["col1", "col2"])
    writer.writeheader()
    writer.writerow({"col1": "a", "col2": "b"})

# JSON files
import json
with open("data.json", "r") as f:
    data = json.load(f)
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)
```

> Always use context managers (`with`) for automatic resource cleanup. Modes: `r` (read), `w` (write), `a` (append), add `b` for binary.

---

## 8. Error Handling

```python
# Try-except
try:
    risky_operation()
except ValueError:
    handle_value_error()
except KeyError as e:
    print(f"Key error: {e}")
except (TypeError, AttributeError):
    handle_multiple()
except Exception as e:          # catch all (use sparingly)
    print(f"Error: {e}")
else:
    success_code()              # if no exception
finally:
    cleanup()                   # always executes

# Raising exceptions
raise ValueError("Invalid value")

# Custom exceptions
class CustomError(Exception):
    pass

# Assertions (for debugging)
assert condition, "Error message"
assert x > 0, "x must be positive"
```

> Catch specific exceptions. Use `finally` for cleanup. Assertions can be disabled with `-O` flag.

---

## 9. Modules and Packages

```python
import module
import module as m              # with alias
from module import function     # import specific item
from module import func1, func2

# Common imports
import os
import sys
import math
import random
from pathlib import Path

# Module execution
if __name__ == "__main__":
    main()
```

> Use clear aliases (`import numpy as np`). `__name__ == "__main__"` allows module to be both imported and run as script.

---

## 10. NumPy Basics

```python
import numpy as np

# Array creation
arr = np.array([1, 2, 3, 4, 5])
arr = np.arange(10)                      # 0-9
arr = np.arange(0, 10, 2)                # start, stop, step
arr = np.linspace(0, 1, 5)               # 5 points between 0 and 1
arr = np.zeros(10)
arr = np.ones((3, 4))                    # 3x4
arr = np.random.rand(5)                  # random [0, 1)

# Array properties
arr.shape           # dimensions
arr.dtype           # data type
arr.size            # number of elements

# Array operations (vectorized)
arr + 5             # add scalar
arr * 2             # multiply
arr1 + arr2         # element-wise addition
np.sqrt(arr)        # square root
np.sum(arr)         # sum all
np.mean(arr)        # mean
np.std(arr)         # standard deviation

# Array indexing and slicing
arr[0]              # first element
arr[-1]             # last element
arr[::2]            # every 2nd element
arr[arr > 5]        # boolean indexing

# 2D arrays
mat = np.array([[1, 2, 3], [4, 5, 6]])
mat[0, 1]           # row 0, col 1
mat[0, :]           # entire row 0
mat[:, 1]           # entire column 1
```

> NumPy arrays are homogeneous, fast, and the foundation for scientific Python. Operations are vectorized - fast and concise.

---

## 11. Pandas Basics

```python
import pandas as pd

# DataFrame (2D labeled table)
df = pd.DataFrame({
    "col1": [1, 2, 3],
    "col2": ["a", "b", "c"],
    "col3": [1.5, 2.5, 3.5]
})

# Reading data
df = pd.read_csv("file.csv")
df = pd.read_csv("file.tsv", sep="\t")
df = pd.read_excel("file.xlsx")

# Writing data
df.to_csv("output.csv", index=False)
df.to_excel("output.xlsx", index=False)

# DataFrame inspection
df.head()           # first 5 rows
df.shape            # (rows, cols)
df.columns          # column names
df.dtypes           # column types
df.info()           # summary info
df.describe()       # summary statistics

# Selecting data
df["col1"]          # single column (Series)
df[["col1", "col2"]]  # multiple columns
df.loc[0, "col1"]   # cell by label
df.iloc[0, 0]       # cell by position

# Filtering
df[df["col1"] > 5]                      # boolean indexing
df[(df["col1"] > 5) & (df["col2"] == "a")]  # multiple conditions
df[df["col2"].isin(["a", "b"])]        # value in list

# Modifying data
df["new_col"] = df["col1"] * 2          # add column
df.drop("col1", axis=1, inplace=True)   # drop column
df.rename(columns={"old": "new"}, inplace=True)

# Sorting
df.sort_values("col1")                  # sort by column
df.sort_values(["col1", "col2"], ascending=[True, False])

# Handling missing data
df.isnull().sum()   # count NaN per column
df.dropna()         # drop rows with any NaN
df.fillna(0)        # fill NaN with value

# Grouping and aggregation
df.groupby("col1").mean()               # group and aggregate
df.groupby("col1")["col2"].sum()        # group and aggregate column
df.groupby(["col1", "col2"]).agg({"col3": "mean", "col4": "sum"})

# Merging and joining
pd.concat([df1, df2])               # concatenate vertically
df1.merge(df2, on="key")            # inner join
df1.merge(df2, on="key", how="left")     # left join
df1.merge(df2, on="key", how="right")    # right join
df1.merge(df2, on="key", how="outer")    # outer join
```

> Pandas is essential for data analysis. Always inspect data after loading with `head()`, `info()`, `describe()`. Use `&` (and) `|` (or) for boolean operations, not `and`/`or`.

---

## 12. Itertools

```python
from itertools import *

# Infinite iterators
count(10)           # 10, 11, 12, ...
cycle([1, 2, 3])    # 1, 2, 3, 1, 2, 3, ...

# Finite iterators
chain([1,2], [3,4])         # 1, 2, 3, 4
compress(data, selectors)   # filter by bool list

# Combinatoric
product([1,2], [3,4])       # cartesian product
permutations([1,2,3])       # all permutations
combinations([1,2,3], 2)    # all 2-combinations
```

---

## 13. Object-Oriented Programming

```python
class MyClass:
    class_var = 0           # Class variable (shared)
    
    def __init__(self, value):
        self.value = value  # Instance variable
        MyClass.class_var += 1
    
    def method(self):
        return self.value * 2
    
    @classmethod
    def class_method(cls):
        return cls.class_var
    
    @staticmethod
    def static_method(x):
        return x * 2
    
    def __str__(self):
        return f"MyClass({self.value})"

class Child(Parent):
    def __init__(self, x, y):
        super().__init__(x)  # call parent constructor
        self.y = y
    
    def method(self):
        return self.x + self.y
```

> `__init__` is constructor. Use `super()` to call parent methods. Python supports multiple inheritance.

---

## 14. Path Operations

```python
import os
from pathlib import Path

# pathlib (modern, preferred)
p = Path("dir/file.txt")
p.exists()          # check existence
p.is_file()         # is file?
p.name              # "file.txt"
p.stem              # "file"
p.suffix            # ".txt"
p.parent            # "dir"
p.absolute()        # absolute path
Path.cwd()          # current directory
p.mkdir(parents=True, exist_ok=True)  # create nested
list(p.glob("*.txt"))      # find files
list(p.rglob("*.txt"))     # recursive find

# os.path (traditional)
os.path.exists("file.txt")
os.path.join("dir", "subdir", "file.txt")
os.path.basename("/path/to/file.txt")  # "file.txt"
os.listdir("dir")                      # list directory
```

> Use `pathlib.Path` for new code - cleaner, cross-platform.

---

## 15. Command Line Arguments

```python
import argparse

parser = argparse.ArgumentParser(description="Description")
parser.add_argument("input", help="Input file")
parser.add_argument("-o", "--output", help="Output file")
parser.add_argument("-v", "--verbose", action="store_true")
parser.add_argument("-n", type=int, default=10, help="Number")
args = parser.parse_args()

print(args.input)
if args.verbose:
    print("Verbose mode")
```

> Use `argparse` for scripts with options. Provides help, type checking, validation.

---

## Notes for Bioinformatics

- **Essential libraries**: NumPy (arrays), Pandas (tables), Biopython (sequences), matplotlib/seaborn (plotting)
- **Large files**: Use generators, `pd.read_csv(chunksize=10000)`, or specialized tools (pysam, h5py)
- **Performance**: Vectorize with NumPy/Pandas. Use Numba/Cython for critical loops
- **Virtual environments**: Use `venv` or `conda` to isolate project dependencies
- **Common patterns**:
    - Read FASTA: Biopython `SeqIO.parse()`
    - Statistical analysis: scipy, statsmodels
    - Machine learning: scikit-learn
    - Plotting: matplotlib, seaborn, plotly

## Python vs [R](/posts/r-grammar-basic/)

- R `<-` → Python `=`
- R `c()` → Python `[]`
- R `list()` → Python `{}`
- R `data.frame()` → Python `pd.DataFrame()`
- R `apply()` → Python `df.apply()`
- R `%>%` → Python method chaining `df.method1().method2()`
- R `NA` → Python `None` or `np.nan`
- R vectors are 1-indexed → Python is 0-indexed
