# PYTHON BANKING PROGRAM

def show_balance():
    print(f"Your current balance is: ${balance}")


def deposit():
    global balance
    amount = float(input("Enter the amount to deposit: "))
    balance += amount
    print(f"${amount} deposited. Your new balance is: ${balance}")


def withdraw():
    global balance
    amount = float(input("Enter the amount to withdraw: "))
    if amount > balance:
        print("Insufficient funds!")
    else:
        balance -= amount
        print(f"${amount} withdrawn. Your new balance is: ${balance}")


balance = 100
is_running = True

while is_running:
    print("\nBanking Program")
    print("1. Show Balance")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Exit")

    choice = input("Enter your Choice (1-4): ")

    if choice == '1':
        show_balance()
    elif choice == '2':
        deposit()
    elif choice == '3':
        withdraw()
    elif choice == '4':
        is_running = False
        print("Exiting the program. Thank you for banking with us!")
    else:
        print("That is not a valid choice.")
