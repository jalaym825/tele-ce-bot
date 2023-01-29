#include <stdio.h>

int main()
{
    int numbers[25], positive_numbers = 0, negative_numbers = 0, even = 0, odd = 0;
    printf("Start entering numbers 1 by 1 for 25 times: \n");
    for (int i = 0; i < 25; i++)
        scanf("%d", &numbers[i]);

    for (int i = 0; i < 25; i++)
    {
        if (numbers[i] > 0)
            positive_numbers++;
        else
            negative_numbers++;
        if (numbers[i] % 2 == 0)
            even++;
        else
            odd++;
    }

    printf("\n\nPositive Numbers: %d\nNegative Numbers: %d\nEven Numbers: %d\nOdd Numbers: %d", positive_numbers, negative_numbers, even, odd);
    return 0;
}