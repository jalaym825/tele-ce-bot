#include <stdio.h>

int main()
{
    printf("MULTIPLICATION TABLE (1 to 7)\n");
    printf("-----------------------------\n");
    int i = 1;
    do
    {
        int j = 1;
        do
        {
            printf(" ");
            if (i * j >= 10)
                printf("%d ", i * j);
            else
                printf(" %d ", i * j);
            j++;
        } while (j <= 7);
        printf("\n");
        i++;
    } while (i <= 10);
    printf("-----------------------------");
    return 0;
}
