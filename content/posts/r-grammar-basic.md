---
title: "R Grammar Basic"
date: 2025-04-18
tags: ["R", "Statistics", "Data Science", "Cheatsheet"]
categories: ["Coding Notes"]
description: "Comprehensive R reference covering data types, indexing, operators, apply family, data manipulation, and statistical functions."
---

## 1. Data Types and Structures

```r
# Basic data types
x <- 42              # numeric (double)
y <- 42L             # integer (note the L suffix)
z <- TRUE            # logical (TRUE/FALSE or T/F)
s <- "text"          # character
c <- 1+2i            # complex

# Check types
class(x)             # high-level type
typeof(x)            # low-level type
is.numeric(x)        # type checking functions
```

> R's type system: numeric (default for numbers), integer, logical, character, complex. Use `class()` for object class, `typeof()` for internal storage type.

```r
# Vectors (atomic, homogeneous)
v1 <- c(1, 2, 3, 4, 5)                    # combine function
v2 <- 1:10                                 # sequence operator
v3 <- seq(1, 10, by=2)                     # sequence function
v4 <- rep(1, times=5)                      # repeat
v5 <- rep(c(1,2), times=3)                 # repeat vector
v6 <- rep(c(1,2), each=3)                  # repeat each element

# Vector operations
length(v1)                                 # vector length
names(v1) <- c("a", "b", "c", "d", "e")   # name elements
v1["a"]                                    # access by name
```

> Vectors are the fundamental data structure in R. All elements must be the same type (coercion occurs if mixed).

```r
# Matrices (2D, homogeneous)
m1 <- matrix(1:12, nrow=3, ncol=4)                  # by column (default)
m2 <- matrix(1:12, nrow=3, ncol=4, byrow=TRUE)     # by row
m3 <- cbind(c(1,2,3), c(4,5,6))                    # column bind
m4 <- rbind(c(1,2,3), c(4,5,6))                    # row bind

# Matrix operations
dim(m1)              # dimensions
nrow(m1)             # number of rows
ncol(m1)             # number of columns
t(m1)                # transpose
```

```r
# Lists (heterogeneous, recursive)
lst <- list(
  numbers = 1:5,
  text = "hello",
  matrix = matrix(1:4, 2, 2),
  nested = list(a=1, b=2)
)

# List access
lst[[1]]             # extract first element
lst[1]               # subset as list
lst$numbers          # access by name
lst[["numbers"]]     # access by name (computed)
```

> Lists can contain different types and structures. Use `[[]]` or `$` for element extraction, `[]` for subsetting.

```r
# Data frames (2D, heterogeneous columns)
df <- data.frame(
  id = 1:5,
  name = c("A", "B", "C", "D", "E"),
  value = c(10.5, 20.3, 15.7, 30.2, 25.1),
  flag = c(TRUE, FALSE, TRUE, FALSE, TRUE),
  stringsAsFactors = FALSE
)

# Data frame operations
nrow(df)             # number of rows
ncol(df)             # number of columns
dim(df)              # dimensions
names(df)            # column names
str(df)              # structure
head(df, 3)          # first n rows
summary(df)          # summary statistics
```

> Data frames are the primary structure for tabular data. Each column is a vector (can be different types), same length required.

```r
# Factors (categorical variables)
f1 <- factor(c("low", "high", "medium", "low", "high"))
f2 <- factor(c("low", "high", "medium"), 
             levels=c("low", "medium", "high"), 
             ordered=TRUE)

# Factor operations
levels(f1)           # get levels
nlevels(f1)          # number of levels
as.numeric(f1)       # convert to numeric (level indices)
as.character(f1)     # convert to character
```

> Factors store categorical data efficiently. Use `ordered=TRUE` for ordinal data.

---

## 2. Indexing and Subsetting

```r
# Vector indexing
v <- c(10, 20, 30, 40, 50)
v[1]                 # first element (1-indexed!)
v[c(1, 3, 5)]        # multiple positions
v[-2]                # exclude second element
v[2:4]               # range
v[v > 25]            # logical indexing
```

> R uses 1-based indexing. Negative indices exclude elements.

```r
# Matrix indexing
m <- matrix(1:12, nrow=3, ncol=4)
m[2, 3]              # element at row 2, col 3
m[2, ]               # entire row 2
m[, 3]               # entire column 3
m[1:2, 2:3]          # submatrix
m[m > 5]             # logical (returns vector)
```

```r
# Data frame indexing
df <- data.frame(x=1:5, y=letters[1:5], z=c(T,F,T,F,T))
df[1, 2]             # element at row 1, col 2
df[, "y"]            # column by name
df$y                 # column by name
df[df$x > 2, ]       # rows where x > 2
subset(df, x > 2 & z==TRUE, select=c(x, y))  # subset function
```

> Data frames combine matrix and list indexing. `$` and `[[]]` return vectors, `[]` returns data frame.

---

## 3. Operators

```r
# Arithmetic operators
x + y                # addition
x - y                # subtraction
x * y                # multiplication
x / y                # division
x ^ y                # exponentiation
x %% y               # modulo (remainder)
x %/% y              # integer division

# Vectorized operations
c(1,2,3) + c(4,5,6)  # element-wise
c(1,2,3) * 2         # recycling

# Comparison operators
x == y               # equal
x != y               # not equal
is.na(x)             # is NA (missing)
is.null(x)           # is NULL

# Logical operators
x & y                # element-wise AND
x | y                # element-wise OR
!x                   # NOT
x && y               # short-circuit AND (first element only)
any(x)               # TRUE if any element is TRUE
all(x)               # TRUE if all elements are TRUE

# Special operators
x %in% y             # element matching
1:3 %in% c(1,2,5)    # returns c(TRUE, TRUE, FALSE)
```

> `&` and `|` are vectorized. `&&` and `||` evaluate first element only. Use `<-` for assignment by convention. `%in%` tests if elements of x are in y.

---

## 4. Control Structures

```r
# If-else
if (condition) {
  # code
} else if (another_condition) {
  # code
} else {
  # code
}

# Vectorized if-else
ifelse(test_vector, yes_vector, no_vector)
x <- c(1, 2, 3, 4, 5)
ifelse(x > 3, "high", "low")  # element-wise

# For loops
for (i in 1:10) {
  # code using i
}

for (item in vector) {
  # code using item
}

# While loops
while (condition) {
  # code
}

# Loop control
break                # exit loop
next                 # skip to next iteration
```

> `if` evaluates single logical value. Use `ifelse()` for vectorized operations on vectors. For loops iterate over sequences.

---

## 5. Functions

```r
# Function definition
my_function <- function(arg1, arg2, arg3=default) {
  # code
  result <- arg1 + arg2 + arg3
  return(result)      # explicit return
  # or just: result   # implicit return (last value)
}

# Function call
my_function(1, 2)              # positional arguments
my_function(arg1=1, arg2=2)    # named arguments

# Anonymous functions
sapply(1:5, function(x) x^2)                    # classic
sapply(1:5, \(x) x^2)                           # R 4.1+ shorthand

# Variable number of arguments
f <- function(...) {
  args <- list(...)
  # process args
}
```

> Functions are first-class objects. Last evaluated expression is returned by default. `...` (dots) allows variable arguments.

---

## 6. Apply Family Functions

```r
# apply: for matrices/arrays
m <- matrix(1:12, nrow=3)
apply(m, 1, sum)     # apply over rows (MARGIN=1)
apply(m, 2, mean)    # apply over columns (MARGIN=2)

# lapply: returns list
lapply(list(1:3, 4:6), sum)
lapply(1:5, function(x) x^2)

# sapply: simplified output (vector/matrix if possible)
sapply(list(1:3, 4:6), sum)
sapply(1:5, function(x) x^2)

# vapply: with explicit output type (safer)
vapply(1:5, function(x) x^2, numeric(1))

# mapply: multivariate version
mapply(function(x, y) x + y, 1:3, 4:6)

# tapply: apply by groups
x <- c(1, 2, 3, 4, 5, 6)
g <- c("A", "B", "A", "B", "A", "B")
tapply(x, g, sum)    # sum x grouped by g
```

> Apply family avoids explicit loops. `lapply` always returns list, `sapply` simplifies, `vapply` is type-safe.

---

## 7. Data Manipulation Functions

```r
# Combining data
cbind(df1, df2)      # bind columns
rbind(df1, df2)      # bind rows
merge(df1, df2, by="id")              # merge by column
merge(df1, df2, all=TRUE)             # outer join
merge(df1, df2, all.x=TRUE)           # left join

# Sorting
sort(x)              # sort vector
order(x)             # return sorting indices
df[order(df$x), ]    # sort data frame by column
df[order(df$x, -df$y), ]  # multi-column (y descending)

# Aggregation
aggregate(x ~ group, data=df, FUN=mean)        # formula interface
aggregate(cbind(x, y) ~ group, data=df, FUN=mean)  # multiple columns

# Table functions
table(df$category)                # frequency table
table(df$cat1, df$cat2)           # cross-tabulation
prop.table(table(df$category))    # proportions

# Reshaping data
# wide to long
reshape(df, direction="long", varying=c("var1", "var2"), v.names="value", timevar="time")
# long to wide
reshape(df, direction="wide", v.names="value", timevar="time", idvar="id")
```

> `cbind`/`rbind` for simple binding. `merge()` for database-style joins. `aggregate()` for grouped operations.

---

## 8. String Operations

```r
# Basic string functions
nchar(s)             # character count
paste(s1, s2)        # concatenate with space
paste0(s1, s2)       # concatenate without separator
paste(s1, s2, sep="-")  # custom separator
paste(vec, collapse=",")  # collapse vector to single string

# String manipulation
toupper(s)           # to uppercase
tolower(s)           # to lowercase
substr(s, start, stop)  # extract substring
strsplit(s, split=" ")  # split string (returns list)

# Pattern matching
grep(pattern, x)              # return indices
grepl(pattern, x)             # return logical
grep(pattern, x, value=TRUE)  # return matching values
sub(pattern, replacement, x)  # replace first match
gsub(pattern, replacement, x) # replace all matches
```

---

## 9. Missing Data Handling

```r
# Creating NA values
x <- c(1, 2, NA, 4, 5)

# Testing for NA
is.na(x)             # logical vector
any(is.na(x))        # any NA present
sum(is.na(x))        # count NAs
complete.cases(df)   # rows with no NAs
na.omit(df)          # remove rows with NAs

# Handling NA in functions
mean(x, na.rm=TRUE)  # remove NA before calculation
sum(x, na.rm=TRUE)

# Replacing NA values
x[is.na(x)] <- 0               # replace with value
x <- ifelse(is.na(x), 0, x)    # conditional replacement
```

> Most functions have `na.rm` parameter. Use `is.na()` not `== NA` for testing.

---

## 10. Input/Output

```r
# Reading data
read.table("file.txt", header=TRUE, sep="\t")  # general
read.csv("file.csv", header=TRUE)              # CSV
read.delim("file.txt", header=TRUE)            # tab-delimited

# Writing data
write.table(df, "file.txt", sep="\t", row.names=FALSE)
write.csv(df, "file.csv", row.names=FALSE)

# Save R objects
save(obj1, obj2, file="data.RData")        # save objects
save.image("workspace.RData")              # save workspace
load("data.RData")                         # load saved objects
saveRDS(obj, "object.rds")                 # save single object
obj <- readRDS("object.rds")               # read single object
```

> Use `read.csv()`/`write.csv()` for comma-separated. Set `stringsAsFactors=FALSE` to avoid automatic factor conversion.

---

## 11. Statistical Functions

```r
# Descriptive statistics
mean(x)              # arithmetic mean
median(x)            # median
sd(x)                # standard deviation
var(x)               # variance
min(x) / max(x)      # minimum / maximum
range(x)             # min and max
quantile(x, probs=c(0.25, 0.75))  # quantiles
IQR(x)               # interquartile range
summary(x)           # five-number summary + mean

# Distributions (d-, p-, q-, r- prefix)
dnorm(x, mean=0, sd=1)       # normal density
pnorm(q, mean=0, sd=1)       # normal CDF
qnorm(p, mean=0, sd=1)       # normal quantile
rnorm(n, mean=0, sd=1)       # normal random

# Correlation
cor(x, y)                          # correlation
cor(df)                            # correlation matrix
cor(x, y, method="spearman")       # Spearman

# Statistical tests
t.test(x, y)                       # t-test
wilcox.test(x, y)                  # Wilcoxon test
chisq.test(table(x, y))            # chi-square test
cor.test(x, y)                     # correlation test

# Linear models
lm(y ~ x, data=df)                 # simple linear regression
lm(y ~ x1 + x2, data=df)           # multiple regression
lm(y ~ x1 * x2, data=df)           # with interaction

# Model functions
summary(model)       # model summary
coef(model)          # coefficients
fitted(model)        # fitted values
residuals(model)     # residuals
predict(model, newdata)  # predictions
```

> Functions return test objects with components accessible via `$`. Formula interface: `~` separates response and predictors.

---

## 12. Environment and Workspace

```r
# Working directory
getwd()              # current directory
setwd("path")        # change directory

# Workspace
ls()                 # list objects
rm(x)                # remove object
rm(list=ls())        # remove all objects

# Object information
class(x)             # object class
str(x)               # structure
dim(x)               # dimensions
length(x)            # length
names(x)             # names attribute
```

---

## 13. Package Management

```r
# Installing packages
install.packages("package_name")

# Loading packages
library(package_name)        # load package
require(package_name)        # load package (returns logical)

# Package information
installed.packages()         # list installed
search()                     # loaded packages
packageVersion("pkg")        # package version
```

> Use `library()` for interactive, `require()` in functions. Install once, load each session.

---

## Notes for Bioinformatics Usage

- For genomics data, consider Bioconductor packages: `GenomicRanges`, `Biostrings`, `DESeq2`
- For large data, use `data.table` or `dplyr` instead of base operations
- For modern workflows, learn tidyverse (pipes `%>%`, `dplyr`, `ggplot2`, `tidyr`)
- Matrix operations are vectorized and fast - avoid loops when possible
- Use `apply` family or vectorization for performance over explicit loops
- Factor behavior can be surprising - set `stringsAsFactors=FALSE` when reading data

## Useful Shortcuts

- `?function_name` - help documentation
- `??search_term` - search all help
- `example(function_name)` - see examples
- `View(df)` - view data frame in RStudio
- `head()`, `tail()`, `str()` - quick data inspection
