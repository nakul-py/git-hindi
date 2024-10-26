# Concession stand program

spec =["ITEMS",  "PRICE"]
menu = {"kurkure": 10,
        "fritz": 5,
        "crax": 5,
        "takatak": 10,
        "cake": 20,
        "pepsi": 50,
        "fanta": 45,
        "coffe": 20,
        "soda": 50}

cart = []
total = 0
print("----------- MENU -----------")

print(spec)

for key, value in menu.items():
    print(f"{key:10}: ₹{value:.2f}")

print("----------------------------")

while True:
    food = input("Select an item (q to quit): ")
    if food.lower() == "q":
        break
    elif menu.get(food)is not None:
        cart.append(food )

print("---------- YOUR ORDER ----------")
for food in cart:
    total += menu.get(food)
    print(food, end=" ")

print()
print(f"Total is: ₹{total:.2f}")