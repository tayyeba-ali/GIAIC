# 9. callable() and __call__()
# Assignment:
# Create a class Multiplier with an __init__() to set a factor. Define a __call__() method that multiplies an input by the factor. Test it with callable() and by calling the object like a function.

class Multiplier:
    def __init__(self, factor):
        self.factor = factor

    def __call__(self, value):
        return value * self.factor

# Create an instance of Multiplier with a factor of 5
multiplier = Multiplier(5)

# Test using callable()
print("Is 'multiplier' callable?", callable(multiplier))  # Output: True

# Call the object like a function
result = multiplier(10)
print("Result of calling multiplier with 10:", result)  # Output: 50
