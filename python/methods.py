#name = input("Enter your full name:")
#phone_number = input("Enter your phone no ->")

#result = len(name)
#result = name.find("a")
#result = name.rfind("a")
#name = name.capitalize()
#name = name.upper()
#name = name.lower()
#name = name.isdigit()
#name = name.isalpha()
#name = name.isalnum()
#phone_number = phone_number.count("9")
#phone_number = phone_number.replace("4", "1")

#print(result)
#print(phone_number)




#### VALIDATE USER INPUT EXERCISE
#### 1. USERNAME IS NO MORE THAN 12 CHARACTERS
#### 2. USERNAME MUST NOT CONTAIN SPACES 
#### 3. USERNAME MUST NOT CONTAIN DIGITS

#username = input("Enter a username: ")

#if len(username) > 12:
#    print("Your username can't be more than 12 characters")
#elif not username.find(" ") == -1:
#    print("Your username can't contain spaces")    
#elif not username.isalpha():
#    print("Your username can't contain digits")

#else:
#    print(f"Welcome {username}")

#"--------------------------------------"

## Function = A block of reusable code
#             place () after the function name to invoke it

#def happy_birthday(name):
 #   print(f"happy birthday to {name}")
 #   print("123456789")
 #   print("abcdef")
 #   print()

#appy_birthday("Nakul")

#def happy_birthday(name, age):
#    print(f"happy birthday to {name}")
#    print(f"you are {age} years old.")
#    print("abcdef")
#    print()

#happy_birthday("Nakul", 30)

#def display_invoice(username, amount, due_date):
#    print(f"Hello {username}")
#    print(f"your balance is {amount}")
#    print(f"your {due_date}")

#display_invoice("Nakul", 100, "1/03")

#def add(x, y):
#    z = x + y
#    return z
#print(add(9, 3))

#def create_name(first, last):
#    first = first.capitalize()
#    last = last.capitalize()
#    return first + " " + last

#full_name = create_name("nakul", "verma")

#print(full_name)

#---------------------------------------

## Iterables = An object/collection that can return its element one at a time,
#              allowing it to be iterated over in a loop

#numbers = [1, 2, 3, 4, 5]

#for item in reversed(numbers):
#    print(item, end=" ")
#print()

my_dictionary = {"A": 2, "B": 4, "C": 12}

for key, value in my_dictionary.items():
    print(f"{key} = {value}")
    