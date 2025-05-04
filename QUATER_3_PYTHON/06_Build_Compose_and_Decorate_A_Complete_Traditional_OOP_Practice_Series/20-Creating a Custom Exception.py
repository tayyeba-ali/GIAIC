# 20. Creating a Custom Exception
# Assignment:
# Create a custom exception InvalidAgeError. Write a function check_age(age) that raises this exception if age < 18. Handle it with try...except.

class InvalidAgeError(Exception):
    """Custom exception for invalid age."""
    def __init__(self,age ,  message):
        self.age = age
        self.message = message
        super().__init__(f"{message} Given age: {age}")

def check_age(age):
    """Function to check if age is valid."""
    if age < 18:
        raise InvalidAgeError(age, "Age must be 18 or older.")
    else:
        print(f"Age {age} is valid.")

try:
    user_age = int(input("Enter your age: "))
    check_age(user_age)
except InvalidAgeError as e:
    print("InvalidAgeError:", e)
except ValueError:
    print("Please enter a valid number ")