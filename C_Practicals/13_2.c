/*Created By YOGI0360*/
#include <stdio.h>
#include <stdlib.h>
void main()
{
    char *ch;
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    ch = (char *)calloc(n, sizeof(char));
    printf("Enter the string before reallocation of memory: ");
    scanf("%s", ch);
    printf("String you enterd using calloc: %s", ch);
    printf("\nEnter the number of elements: ");
    scanf("%d", &n);
    ch = (char *)realloc(ch, n * sizeof(char));
    printf("Enter the string after reallocation of memory: ");
    scanf("%s", ch);
    printf("String you enterd using realloc: %s", ch);
    printf("\n\nCreated By YOGI0360");
}
