# Python number guessing game

import random

lowest = 1
highest = 10
answer = random.randint(lowest, highest)
guesses = 0
is_running = True

print("Python Number Guessing Game")
print(f"Select a number between {lowest} to {highest}")

while is_running:

    guess = input("Enter your guess: ")

    if guess.isdigit():
        guess = int(guess)
        guesses += 1

        if guess < lowest or guess > highest:
            print("Out of range")
            print(f"Please Select a number between {lowest} to {highest}")
        elif guess < answer:
            print("Too low, try again")
        elif guess > answer:
            print("Too high, try again")
        elif guess == answer:
            print(f"CORRECT! the answer was {answer}")
            print(f"Number of guesses: {guesses}")
            is_running = False

    else:
        print("Invalid guess")
        print(f"Please Select a number between {lowest} to {highest}")


