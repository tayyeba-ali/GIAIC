# 8. The super() Function
# Assignment:
# # Create a class Person with a constructor that sets the name. Inherit a class Teacher from it, add a subject field, and use super() to call the base class constructor.

class Person:
    def __init__(self, name):
        self.name = name

class Teacher(Person):
    def __init__(self, name , subject):
        super().__init__(name)
        self.subject = subject
        
    def display(self):
        print("Teacher Name:", self.name)
        print("Subject:", self.subject)

# Create a Teacher object
t1 = Teacher("Shraddha", "Computer SCience")
t1.display()