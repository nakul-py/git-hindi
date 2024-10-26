# dictionary = a collection of {key:value} pairs
#              ordered and changable. No duplicates

capitals = {"India": "New Delhi",
            "Israel": "Jerusalem",
            "Russia": "Moscow",
            "Germany": "Berlin",
            "Italy": "Rome"}

print(capitals.get("India"))

if capitals.get("Russia"):
    print("Thst capital exists")
else:
    print("That capital doesn't exist")

capitals.update({"Japan": "Tokyo"})
print(capitals)

#capitals.update({"Italy": "abc"})
#print(capitals)

#capitals.pop("Germany")
#capitals.popitem()
#capitals.clear()

keys = capitals.keys()

for key in capitals.keys():
    print(key)

values = capitals.values()
for value in capitals.values():
    print(value)

items = capitals.items()
for key, value in capitals.items():
    print(f"{key}: {value}")