#include <stdio.h>
#include <math.h>
#define PI 3.14

void main()
{
    float length, gravity, time_period;

    printf("enter the value of length: ");
    scanf("%f", &length);

    printf("enter the value of gravity: ");
    scanf("%f", &gravity);

    time_period = 2 * PI * sqrtf(length / gravity);

    printf("time period is %.2f seconds\n\n", time_period);
}
