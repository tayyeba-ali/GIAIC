# 18. Property Decorators: @property, @setter, and @deleter
# Assignment:
# Create a class Product with a private attribute _price. Use @property to get the price, @price.setter to update it, and @price.deleter to delete it.

class Product:
    def __init__(self, initial_price):
        self._price = initial_price  # Private attribute
    
    @property
    def price(self):
        """Getter for price"""
        print("Getting price...")
        return self._price
    
    @price.setter
    def price(self, value):
        """Setter for price"""
        print(f"Setting price to {value}...")
        if value < 0:
            raise ValueError("Price cannot be negative")
        self._price = value
    
    @price.deleter
    def price(self):
        """Deleter for price"""
        print("Deleting price...")
        del self._price

# Demonstration
product = Product(100.0)

# Using the getter
print(product.price)  # Output: Getting price... then 100.0

# Using the setter
product.price = 150.0  # Output: Setting price to 150.0...
print(product.price)   # Output: Getting price... then 150.0

# Trying to set negative price
try:
    product.price = -50.0  # Raises ValueError
except ValueError as e:
    print(e)  # Output: Price cannot be negative

# Using the deleter
del product.price  # Output: Deleting price...

# Now price attribute is deleted
try:
    print(product.price)  # Raises AttributeError
except AttributeError:
    print("Price attribute has been deleted")