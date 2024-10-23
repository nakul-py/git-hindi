
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

length = float(input("Enter the length of rectangle: "))
width = float(input("Enter the width of rectangle: "))
area = length * width

#print(f"The area of rectangle is: {area}cm^2")

# Exercise 2 - Shopping cart Program

item = input("What item would you would you like to buy?: ")
price = float(input("What is the price?: "))
quantity = int(input("How many would you like?: "))
total = price * quantity


print(f"The total price is {total} rupees.")
pay = input(f"You have to pay {total} rupees type Enter to pay")
bill = input(f"Enter the amount you have to pay: ")
print(f"You have payed {total} rupees.")
print(f"You have bought {quantity} {item}'s")
