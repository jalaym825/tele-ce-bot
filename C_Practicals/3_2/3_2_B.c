#include<stdio.h>

int main() {
    int yellow_balls = 10, calculation, pink_balls = 20;
    printf("Question 3.2(B)\ncount before execution (yellow): %d\n", yellow_balls);
    printf("count before execution (pink): %d\n", pink_balls);
    calculation = ++yellow_balls + yellow_balls++ + --yellow_balls + ++pink_balls - --pink_balls - --pink_balls;
    printf("count after execution (yellow): %d\n", yellow_balls);
    printf("count after execution (pink): %d\n", pink_balls);
}
