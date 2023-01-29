/*Created By YOGI0360*/

#include <stdio.h>
#include <math.h>
int is_triangle(float area)
{
    if (area > 0)
        return 0;
    else
        return 1;
}

void area(float a, float b, float c)
{
    float s, area;
    s = (a + b + c) / 2.0;
    area = sqrtf(s * (s - a) * (s - b) * (s - c));
    int temp = is_triangle(area);
    if (temp)
        printf("Invalid triangle");
    else
        printf("\nArea of a Triangle: %.2f", area);
}
int main()
{
    float a, b, c, s;
    printf("Enter Value of side of triangle a,b,c:\n");
    printf("Side a:");
    scanf("%f", &a);
    printf("Side b:");
    scanf("%f", &b);
    printf("Side c:");
    scanf("%f", &c);
    area(a, b, c);
    printf("\n\nCreated By YOGI0360");
    return 0;
}