/*Created By YOGI0360*/

#include <stdio.h>

void main()
{
    float total = 0;
    int temp = 1, i;
    printf("start entering price of each product 1 by 1, when products are over, just type 0 and enter.\n");
    for (i = 1; temp != 0; i++)
    {
        scanf("%f", &temp);
        total += temp;
    }

    printf("total amount is %.2f\n\n", total);

    printf("Created By YOGI0360");
}