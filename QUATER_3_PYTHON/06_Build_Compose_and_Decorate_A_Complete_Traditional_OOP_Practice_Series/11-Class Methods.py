# 11. Class Methods
# Assignment:
# Create a class Book with a class variable total_books. Add a class method increment_book_count() to increase the count when a new book is added.
class Book:
    total_books = 0

    def __init__(self , title, author):
        self.title = title
        self.author = author
        Book.increment_book_count()

    @classmethod
    def increment_book_count(cls):
        cls.total_books += 1
    
    @classmethod
    def get_total_book(cls):
        return cls.total_books
    
book1 = Book("1984" , "Georgr Orwell")
book2 = Book("To Kill a Mockingbird", "Harper Lee")
book3= Book("The Great Gatsby", "F. Scott Fitzgerald")
book4 = Book("Rich Dad Poor Dad", "Robert Kiyosaki")
book5  = Book("psychology of money" ,"morgan housel")

print(f"Total books added:{Book.get_total_book()}")