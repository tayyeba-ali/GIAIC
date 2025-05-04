# 14. Aggregation
# Assignment:
# Create a class Department and a class Employee. Use aggregation by having a Department object store a reference to an Employee object that exists independently of it.

class Employee:
    def __init__(self, name , employee_id,position):
        self.name = name
        self.employee_id = employee_id
        self.position = position

class Department:
    def __init__(self, name , department_code):
        self.name = name
        self.department_code = department_code
        self.manager = None
    
    def assign_manager(self, employee):
        if employee.position == "Manager":
            self.manager = employee
            print(f"{employee.name} has been assigned as the manager of {self.name} department.")
        else:
             print(f"Cannot assign {employee.name} as manager - position must be 'Manager'")

    def display_department_info(self):
        print(f"Department Name: {self.name}")
        print(f"Department Code: {self.department_code}")
        if self.manager:
            print(f"Manager: {self.manager.name} (ID: {self.manager.employee_id})")
        else:
            print("No manager assigned yet.")

if __name__ == "__main__":
    # Create Employee objects
    emp1 = Employee("Ali", 101, "Manager")
    emp2 = Employee("Raza", 102, "Developer")

    # Create Department object
    dept = Department("IT", "IT-001")

    # Assign manager to the department
    dept.assign_manager(emp1)  # Should succeed
    dept.assign_manager(emp2)  # Should fail

    # Display department information
    dept.display_department_info()
    