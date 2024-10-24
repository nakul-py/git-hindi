# Temperature Converter


unit = input("Is this temperature in celsius or fahrenheit (c/f): ")
temp = float(input("Enter the temperature: "))

if unit == "c":
    temp = round((9 * temp) / 5 + 32, 1)
    print(f"The temperature in fahrenheit is: {temp} F")

elif unit == "f":
    temp = round((temp -32) * 5 / 9, 1)
    print(f"The temperature in celsius is: {temp} C")
else:
    print(f"{unit} is an invalid unit of measurement")