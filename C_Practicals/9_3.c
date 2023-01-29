/*Created By YOGI0360*/
#include <stdio.h>

void convertBinary(int number)
{
    if (number > 0)
    {
        convertBinary(number / 2);
        printf("%d", number % 2);
    }
}

void main()
{
    int number;

    printf("enter a +ve integer number: ");
    scanf("%d", &number);

    convertBinary(number);
    printf("\n\nCreated By YOGI0360");
}