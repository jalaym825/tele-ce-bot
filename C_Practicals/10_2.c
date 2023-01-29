/*Created By YOGI0360*/
#include <stdio.h>
union library
{
    char title[20];
    char author[20];
    int accession_num;
    int price;
    int flag;
};
int main()
{
    union library b1;
    printf("Enter book name:");
    scanf("%s", b1.title);
    printf("Book Title is: %s\n", b1.title);
    printf("Enter author name:");
    scanf("%s", b1.author);
    printf("Author of Book : %s\n", b1.author);
    printf("enter accession num :");
    scanf("%d", &b1.accession_num);
    printf("accession no is :%d\n", b1.accession_num);
    printf("Enter price of book :");
    scanf("%d", &b1.price);
    printf("Price of book is :%d rs\n", b1.price);
    printf("Enter 1 for book issued else 0: ");
    scanf("%d", &b1.flag);
    if (b1.flag)
        printf("book is issued!");
    else
        printf("book is not issued!");
    printf("\n\nCreated By YOGI0360");
}