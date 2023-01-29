#include<stdio.h>

int main() {
    int yellow_balls = 10;
    printf("Question 3.2(A)\ncount before execution: %d\n", yellow_balls);
    ++yellow_balls; --yellow_balls; yellow_balls++; yellow_balls--;
    printf("count after execution: %d\n\n", yellow_balls);
}