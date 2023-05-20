import random

number = random.randint(1,100)

mod = number % 2

if mod > 0:
    print("Number is even")
else:
    print("Number is odd")