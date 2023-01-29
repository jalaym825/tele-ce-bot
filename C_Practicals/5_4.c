#include <stdio.h>
#include <ctype.h>

void main()
{
    int stock, order;
    char has_credit;

    printf("what's current stock?");
    scanf("%d", &stock);

    printf("does the customer having any credit? (y/n) ");
    scanf("%s", &has_credit);

    printf("enter the order: ");
    scanf("%d", &order);

    if (order <= stock && tolower(has_credit) == 'y')
        printf("your order will be shiiped to your address soon...\n\tQuantity: %d\n", order);
    else if (tolower(has_credit) != 'y')
        printf("Your order isnt't completed as you have not cleared you credits yet.\n");
    else if (tolower(has_credit) == 'y' && order > stock)
        printf("Your order has been cancelled as the order is out of stock atm.\n");
