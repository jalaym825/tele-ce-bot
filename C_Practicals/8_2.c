/*Created By YOGI0360*/

#include <stdio.h>
#include <string.h>
int main()
{
    char Name[5][30];
    int i = 0, j = 0;
    char temp[30];
    for (i = 0; i < 5; i++)
    {
        printf("enter name %d: ", i + 1);
        fgets(Name[i], sizeof(Name[i]), stdin);
    }

    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 4 - i; j++)
        {
            if (strcmp(Name[j], Name[j + 1]) > 0)
            {
                strcpy(temp, Name[j]);
                strcpy(Name[j], Name[j + 1]);
                strcpy(Name[j + 1], temp);
            }
        }
    }

    printf("----------------------\n");
    printf("  Sorted Name Are:   \n");
    printf("----------------------\n");
    for (i = 0; i < 5; i++)
    {
        printf("%d) %s", i + 1, Name[i]);
    }
    printf("\nCreated By YOGI0360");

    return 0;
}