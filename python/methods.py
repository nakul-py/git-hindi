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

username = input("Enter a username: ")

if len(username) > 12:
    print("Your username can't be more than 12 characters")
elif not username.find(" ") == -1:
    print("Your username can't contain spaces")    
elif not username.isalpha():
    print("Your username can't contain digits")

else:
    print(f"Welcome {username}")

"--------------------------------------"

