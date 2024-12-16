class Student:
    school = "GITA"  # Class variable

    def __init__(self, name, age):
        self.name = name  # Instance variable
        self.age = age    # Instance variable

    # Instance method
    def greet(self):
        print(f"Hello, I am {self.name}.")

    # Class method
    @classmethod
    def change_school(cls, new_school):
        cls.school = new_school

    # Static method
    @staticmethod
    def is_adult(age):
        return age >= 18

# Creating objects
student1 = Student("Alice", 20)
student2 = Student("Bob", 15)

# Calling instance method
student1.greet()  # Output: Hello, I am Alice.
student2.greet()  # Output: Hello, I am Bob.

# Calling class method
Student.change_school("GITA University")
print(student1.school)  # Output: GITA University
print(student2.school)  # Output: GITA University

# Calling static method
print(Student.is_adult(20))  # Output: True
print(Student.is_adult(15))  # Output: False
