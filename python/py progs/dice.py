import random

#  ● ┌ ─ ┐ │ └ ┘

"____________"
"|          |"
"|          |"
"|          |"
"|          |"
"|__________|" 

dice_art = {
    1: ("____________",
        "|          |",
        "|          |",
        "|     ●    |",
        "|          |",
        "|__________|"),

    2: ("____________",
        "|          |",
        "|  ●       |",
        "|          |",
        "|       ●  |",
        "|__________|"),

     3: ("____________",
        "|          |",
        "|  ●    ●  |",
        "|          |",
        "|     ●    |",
        "|__________|"),

    4: ("____________",
        "|          |",
        "|  ●    ●  |",
        "|          |",
        "|  ●    ●  |",
        "|__________|"),
   
    5: ("____________",
        "|          |",
        "|  ●     ● |",
        "|     ●    |",
        "|  ●     ● |",
        "|__________|"),
   
    6: ("____________",
        "|          |",
        "|  ●    ●  |",
        "|  ●    ●  |",
        "|  ●    ●  |",
        "|__________|"),

}

dice = []
total = 0
num_of_dice = int(input("How many dice?: "))

for die in range(num_of_dice):
    dice.append(random.randint(1, 6))

#for die in range(num_of_dice):
#    for line in dice_art.get(dice[die]):
#        print(line)

for line in range(6):
    for die in dice:
        print(dice_art.get(die)[line], end="")
    print()

for die in dice:
    total += die
print(f"total: {total}")