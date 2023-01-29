#include <stdio.h>

void main()
{
    int money, rest_money, _100_notes, _50_notes, _10_notes;

    printf("enter bill amount: ");
    scanf("%d", &money);

    _100_notes = money / 100;
    rest_money = money % 100;
    printf("100 -> %d\n", _100_notes);

    _50_notes = rest_money / 50;
    rest_money = rest_money % 50;
    printf("50 -> %d\n", _50_notes);

    _10_notes = rest_money / 10;
    rest_money = rest_money % 10;
    printf("10 -> %d\n\n", _10_notes);
}