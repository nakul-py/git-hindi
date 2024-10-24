
# print ("HI THERE!")
# print("I AM NAKUL")

## Variable = A container for a value (string, integer, float, boolean)
##            Avariable behaves as if it was the value it contains
 
# Strings

#first_name = "Nakul"
#fruit = "mango"
#email = "nakul@gmail.com"

#print(f"Hello {first_name}")
#print(f"You like {fruit}")
#print(f"Your email is: {email}") 

# Integers

#age = 20
#height = "200m"
#date_of_birth = "1/2/2000"

#print(f"Your age is: {age}")
#print(f"Your height is: {height}")
#print(f"Your date of birth is: {date_of_birth}")

# Floats

#price = 20.6
#gst = 2.00
#distance = 2.5

#print(f"The price is {price}")
#print(f"GST on product is {gst}")
#print(f"Distance from your home to supermarket {distance}km")

# Booleans

#is_student = True
#for_sale = False

#if is_student:
#    print("You are a student")
#else:
#    print("You are not a student")

#if for_sale:
#    print("This item is for sale")
#else:
#   print("This item is Not available")    

## Typescript = the process of converting a variable from one datatype to another
##              str(), int(), float(), bool()

#name = "Nakul Verma"
#age = 25
#height = 6.6
#is_student = True

#age = float(age)

#print(age)

#name = bool(name)

#print(name)

## input() = A function that prompts the user to enter data
##           Returns the entered data as a string

#name = input("What is your name: ")
#age = int(input("How old are you: "))
#dob = input("What is your date of birth: ")

#age = age + 1

#print(f"Hello {name}!")
#print(f"Your date of birth is {dob}")
#print(f"HAPPY BIRTHDAY! you are now {age} years old.")


## Exercise 1 - Calculate Rectangle Area

#length = float(input("Enter the length of rectangle: "))
#width = float(input("Enter the width of rectangle: "))
#area = length * width

#print(f"The area of rectangle is: {area}cm^2")

# Exercise 2 - Shopping cart Program

#item = input("What item would you would you like to buy?: ")
#price = float(input("What is the price?: "))
#quantity = int(input("How many would you like?: "))
#total = price * quantity


#print(f"The total price is {total} rupees.")
#pay = input(f"You have to pay {total} rupees type Enter to pay")
#bill = input(f"Enter the amount you have to pay: ")
#print(f"You have payed {total} rupees.")
#print(f"You have bought {quantity} {item}'s")


## Logical operators = evaluate multiple conditions (or, and, not)
##                    or = at least one condition must be true
##                    and = both condition must be true
##                    not = inverts the condition (not False, not True)


#temp = 20
#is_sunny = False

#if temp >= 28 and is_sunny:
#    print("It is HOT outside. ")
#    print("It is SUNNY.")
#elif temp <= 0 and is_sunny:
#    print("It is COLD outside. ")
#    print("It is SUNNY.")
#elif 28 > temp > 0 and is_sunny:
#    print("It is WARM outside. ")
#    print("It is SUNNY.")
#elif temp >= 28 and not is_sunny:
 #   print("It is HOT outside. ")
  #  print("It is CLOUDY.")
#elif temp <= 0 and not is_sunny:
 #   print("It is COLD outside. ")
  #  print("It is CLOUDY.")
#elif 28 > temp > 0 and not is_sunny:
 #   print("It is WARM outside. ")
  #  print("It is CLOUDY.")

## Conditional experessions = A one-line shortcut for the if-else statement  (ternary operator)
##                            Print or assign one of two values based on a condition
##                            X if condition else Y


#num = 9
#a = 5
#b = 8
#age = 25
#temperature = 29
#user_role = "admin"

#print("Posative" if num > 0 else "Negative")
#result = "Even" if num % 2 == 0 else "Odd"
#max_num = a if a > b else b
#min_num = a if a < b else b
#status = "Adult" if age >= 18 else "Old"
#weather = "Hot" if temperature > 35 else  "Cold" if temperature < 10 else "Warm"
#acess_level = "Yes" if user_role == "admin" else "No"

#print(result)
#print(max_num)
#print(min_num)
#print(status)
#print(weather)
#print(acess_level)

## indexing = acessing elements of a sequence using [] (indexing operator)
##             [start: end: step]


credit_number = "1234-3456-6789-0123"

#print(credit_number[0])
#print(credit_number[:4])
#print(credit_number[6:9])
#print(credit_number[5:])
#print(credit_number[-4])
#print(credit_number[::2])
credit_number = credit_number[::-1]

#last_digits = credit_number[-4:]
#print(f"AAAA-AAAA-AAAA-{last_digits}")
print(credit_number)
