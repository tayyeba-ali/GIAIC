# OOP Python Assignments

## 1. Using `self`

**Assignment**: Create a class `Student` with attributes `name` and `marks`. Use the `self` keyword to initialize these values via a constructor. Add a method `display()` that prints student details.

```python
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def display(self):
        print(f"Name: {self.name}, Marks: {self.marks}")
```

## 2. Using `cls`

**Assignment**: Create a class `Counter` that keeps track of how many objects have been created.

```python
class Counter:
    count = 0

    def __init__(self):
        Counter.count += 1

    @classmethod
    def show_count(cls):
        print(f"Total objects created: {cls.count}")
```

## 3. Public Variables and Methods

**Assignment**: Create a class `Car` with a public variable `brand` and a public method `start()`.

```python
class Car:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        print(f"{self.brand} car is starting...")
```

## 4. Class Variables and Class Methods

**Assignment**: Create a class `Bank` with a class variable `bank_name`.

```python
class Bank:
    bank_name = "XYZ Bank"

    @classmethod
    def change_bank_name(cls, name):
        cls.bank_name = name
```

## 5. Static Variables and Static Methods

**Assignment**: Create a class `MathUtils` with a static method `add(a, b)`.

```python
class MathUtils:
    @staticmethod
    def add(a, b):
        return a + b
```

## 6. Constructors and Destructors

**Assignment**: Create a class `Logger` that prints a message on creation and destruction.

```python
class Logger:
    def __init__(self):
        print("Logger initialized.")

    def __del__(self):
        print("Logger destroyed.")
```

## 7. Access Modifiers: Public, Private, and Protected

```python
class Employee:
    def __init__(self, name, salary, ssn):
        self.name = name            # Public
        self._salary = salary       # Protected
        self.__ssn = ssn            # Private
```

## 8. The `super()` Function

**Assignment**: Use `super()` to inherit from `Person` to `Teacher`.

```python
class Person:
    def __init__(self, name):
        self.name = name

class Teacher(Person):
    def __init__(self, name, subject):
        super().__init__(name)
        self.subject = subject
```

## 9. Abstract Classes and Methods

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height
```

## 10. Instance Methods

```python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        print(f"{self.name} is barking!")
```

## 11. Class Methods

```python
class Book:
    total_books = 0

    @classmethod
    def increment_book_count(cls):
        cls.total_books += 1
```

## 12. Static Methods

```python
class TemperatureConverter:
    @staticmethod
    def celsius_to_fahrenheit(c):
        return (c * 9/5) + 32
```

## 13. Composition

```python
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self, engine):
        self.engine = engine

    def start_car(self):
        self.engine.start()
```

## 14. Aggregation

```python
class Employee:
    def __init__(self, name):
        self.name = name

class Department:
    def __init__(self, department_name, employee):
        self.department_name = department_name
        self.employee = employee
```

## 15. MRO and Diamond Inheritance

```python
class A:
    def show(self):
        print("A")

class B(A):
    def show(self):
        print("B")

class C(A):
    def show(self):
        print("C")

class D(B, C):
    pass

obj = D()
obj.show()  # Output: B (due to MRO)
```

## 16. Function Decorators

```python
def log_function_call(func):
    def wrapper():
        print("Function is being called")
        return func()
    return wrapper

@log_function_call
def say_hello():
    print("Hello!")
```

## 17. Class Decorators

```python
def add_greeting(cls):
    cls.greet = lambda self: "Hello from Decorator!"
    return cls

@add_greeting
class Person:
    def __init__(self, name):
        self.name = name
```

## 18. Property Decorators

```python
class Product:
    def __init__(self, price):
        self._price = price

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, value):
        self._price = value

    @price.deleter
    def price(self):
        del self._price
```

## 19. `callable()` and `__call__()`

```python
class Multiplier:
    def __init__(self, factor):
        self.factor = factor

    def __call__(self, value):
        return value * self.factor
```

## 20. Custom Exception

```python
class InvalidAgeError(Exception):
    def __init__(self, age):
        super().__init__(f"Invalid age: {age}. Must be 18 or older.")

def check_age(age):
    if age < 18:
        raise InvalidAgeError(age)
```

## 21. Custom Iterable

```python
class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current < 0:
            raise StopIteration
        val = self.current
        self.current -= 1
        return val
```
