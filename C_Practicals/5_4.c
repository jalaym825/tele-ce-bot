/*Created By YOGI0360*/

#include <stdio.h>
#include <ctype.h>

void main()
{
    int stock, order;
    char has_credit;

    printf("what's current stock? ");
    scanf("%d", &stock);

    printf("does the customer having any credit? (y/n) ");
    scanf("%s", &has_credit);

    printf("enter the order: ");
    scanf("%d", &order);

    has_credit = tolower(has_credit);

    if (order <= stock && has_credit == 'y')
        printf("your order will be shipped to your address soon...\n\tQuantity: %d\n", order);
    else if (has_credit != 'y')
        printf("Your order isnt't completed as you have not cleared you credits yet.\n");
    else if (has_credit == 'y' && order > stock)
        printf("Your order has been cancelled as the order is out of stock atm.\n");

    printf("\nCreated By YOGI0360");
}