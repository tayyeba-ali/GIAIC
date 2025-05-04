# 7. Access Modifiers: Public, Private, and Protected
# Assignment:
# Create a class Employee with:

# a public variable name,

# a protected variable _salary, and

# a private variable __ssn.

# Try accessing all three variables from an object of the class and document what happens.

class Employee:
    def __init__(self, name, department, salary, ssn):
        self.name = name                 # public
        self.department = department     # public
        self._salary = salary            # protected
        self.__ssn = ssn                 # private

    def get_ssn(self):
        return self.__ssn

    def update_salary(self, new_salary):
        self._salary = new_salary


# Create Manager object
manager = Employee("Fiza", "Information Technology", "40,000", "444-850-2025")

# Output
print("Manager :", manager.name)
print("Department :", manager.department)
print("Protected Salary :", manager._salary)
print("Acessing SSN via getter command :", manager.get_ssn())

# Updating protected salary
manager.update_salary("60,000")
print("Update Salary :", manager._salary)

# Accessing private variable using name mangling (not recommended)
print("private SSN via Managed :", manager._Employee__ssn)