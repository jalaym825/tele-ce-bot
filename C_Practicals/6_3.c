#include <stdio.h>

void main()
{
    float total, temp;
    printf("start entering price of each product 1 by 1, when products are over, just type 0 and enter.\n");
    for (int i = 1; i != 0; i++)
    {
        scanf("%f", &temp);
        if(temp == 0) break;
        total += temp;
    }

    printf("total amount is %.2f\n\n", total);
}