# 6. Constructors and Destructors
# Assignment:
# Create a class Logger that prints a message when an object is created (constructor) and another message when it is destroyed (destructor).

class Logger:
    def __init__(self):
        print("Logger object created.")
    
    def __del__(self):
        print("Logger object destroyed.")

log = Logger()  # Object is created
del log  # Object is destroyed (destructor called)