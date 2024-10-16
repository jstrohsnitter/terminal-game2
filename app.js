const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

import time

class LandscaperGame:
    def __init__(self):
        self.dollars = 0
        self.days = 0

    def start_game(self):
        print("Welcome to Landscaper Game!")
        print("You are cutting grass with your teeth to earn one dollar a day.")
        print("You can type 'cut' to cut grass for a day or 'quit' to end the game.")

        while True:
            action = input("What would you like to do? (cut/quit): ").strip().lower()

            if action == "cut":
                self.cut_grass()
            elif action == "quit":
                self.end_game()
                break
            else:
                print("Invalid command. Please type 'cut' or 'quit'.")

    def cut_grass(self):
        self.days += 1
        self.dollars += 1
        print(f"Day {self.days}: You cut grass with your teeth and earned $1!")
        print(f"Total earnings: ${self.dollars}")
        time.sleep(1)  # Simulates the passage of time

    def end_game(self):
        print("Thanks for playing!")
        print(f"You earned a total of ${self.dollars} over {self.days} days.")
        print("Goodbye!")

if __name__ == "__main__":
    game = LandscaperGame()
    game.start_game()
