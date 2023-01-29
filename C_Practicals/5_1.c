#include <stdio.h>

int main()
{
    int height;
    printf("Enter Your height in CMs:>  ");
    scanf("%d", &height);
    if (height < 150)
        printf("You are dwarf.");
    else
    {
        if (height >= 150 && height < 165)
            printf("You have an average height.");
        else
        {
            if (height >= 165 && height <= 195)
                printf("You are tall.");
            else
                printf("You have an abnormal height.");
        }
    }
    return 0;
}
