import random

options = ("rock", "paper", "scissor")

running = True

while running:

    player = None
    computer = random.choice(options)

    while player not in options:
        player = input("Enter a choice (rock, paper, scissor): ")

    print(f"Player: {player}")
    print(f"Computer: {computer}")
    
    if player == computer:
        print("Its a tie!")
    elif player == "rock" and computer == "scissor":
        print("You win!")
    elif player == "paper" and computer == "rock":
        print("YOu win!")
    elif player == "scissor" and computer == "paper":
        print("You win!")
    elif player == "rock" and computer == "paper":
        print("YOu lose!")
    elif player == "paper" and computer == "scissor":
        print("You lose!")
    elif player == "scissor" and computer == "rock":
        print("YOu lose!")
    
    play_again = input("Play Again? (y/n): ").lower()
    if not play_again == "y":
        running = False

    

print("Thanks for playing!")
