/*Created By YOGI0360*/

#include <stdio.h>
#include <string.h>
#include <ctype.h>

void palindrome(char[20], int);

int main()
{
    char str[20], temp;
    int i = 0, c = 0;
    printf("Enter a string: ");
    gets(str);

    for (i = 0; i < strlen(str) - 1; i++)
        str[i] = tolower(str[i]);

    palindrome(str, 0);

    printf("\nCreated By YOGI0360");
    return 0;
}

void palindrome(char string[20], int i)
{
    if (i < strlen(string) - 1 - i && string[i] == string[strlen(string) - 1 - i])
        palindrome(string, i + 1);
    else
        i == strlen(string) / 2 ? printf("it is palindrome") : printf("it is not palindrome");
}