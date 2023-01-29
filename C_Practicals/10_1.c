/*Created By YOGI0360*/
#include <stdio.h>
struct book
{
    char bname[20], author[20];
    float price;
};
void printBook(struct book);
void main()
{
    struct book B1;
    int i;

    printf("Enter the Book Name: ");
    scanf(" %[^\n]", B1.bname);
    printf("Enter the Author Name: ");
    scanf(" %[^\n]", B1.author);
    printf("Enter the Price: ");
    scanf(" %f", &B1.price);
    printBook(B1);
    printf("\n\nCreated By YOGI0360");
    return 0;
}

void printBook(struct book B)
{
    printf("\nBook name is: %s", B.bname);
    printf("\nAuthor Name is: %s", B.author);
    printf("\nPrice of book is: %.2f", B.price);
}