# 15. Method Resolution Order (MRO) and Diamond Inheritance
# Assignment:
# Create four classes:

# A with a method show(),

# B and C that inherit from A and override show(),

# D that inherits from both B and C.

# Create an object of D and call show() to observe MRO.

class A :
    def show(self):
        print("Class A")

class B(A) :
    def show(self):
        print("show from Class B")

class C(A) :
    def show(self):
        print("show from Class C")

class D(B, C) :
    pass

obj = D()

obj.show()  # This will call the show() method from class B due to MRO

print("Method Resolution Order (MRO):")
print(D.__mro__)  # This will show the order in which Python looks for methods in the class hierarchy
# The MRO will be D -> B -> C -> A