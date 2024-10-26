## Python quiz game

questions = ("What is color of rainbow?: ",
             "What is the full form of IPL?: ",
             "How many player in a cricket team?: ",
             "Who is the captian of team India cricket team?: ",
             "How many bones does human have?: ")

options = (("A. RGB", "B. VIBGYOR", "C. BIGYORV", "D. GIBYVOR"),
           ("A. INDIAN PLAYERS LEAGUE", "B. INTERNATIONAL PLAYERS LEAGUE", "C. INTERNATIONAL PREMIER LEAGUE", "D. INDIAN PREMIER LEAGUE"),
           ("A. 22", "B. 10", "C. 11", "D. 12"),
           ("A. Rohit Sharma", "B. Virat Kolhi", "C. Rahul Dravid", "D. M.S Dhoni"),
           ("A, 295", "B. 206", "C.260", "D.203"))

answers = ("B", "D", "C", "A", "B")
guesses = []
score = 0
question_num = 0

for question in questions:
    print("--------------------------")
    print(question)
    for option in options[question_num]:
        print(option)

    guess = input("Enter (A, B, C, D): ").upper()
    guesses.append(guess)
    if guess == answers[question_num]:
        score += 1
        print("CORRECT! Answer")
    else:
        print("INCORRECT!")
        print(f"{answers[question_num]} is the correct answer")
    question_num += 1

print("-------------------------")
print("         RESULTS         ")
print("-------------------------")

print ("answers: ", end="")
for answer in answers:
    print(answer, end=" ")
print()

print ("guesses: ", end="")
for guess in guesses:
    print(guess, end=" ")
print()

score = int(score / len(questions) * 100)
print (f"Your score: {score}%")
