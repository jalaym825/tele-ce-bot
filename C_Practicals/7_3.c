/*Created By YOGI0360*/

#include <stdio.h>

int main()
{

    int mat1[3][3], mat2[3][3], mat3[3][3] = {0}, i, j, k, sum;

    printf("For Matrix A\n");
    printf("Enter row elements 1 by 1:\n");
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            printf("Enter A[%d][%d]", i + 1, j + 1);
            scanf("%d", &mat1[i][j]);
        }
    }
    printf("--------------------------\n");
    printf("For Matrix B\n");
    printf("Enter row elements 1 by 1:\n");
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            printf("Enter A[%d][%d]", i + 1, j + 1);
            scanf("%d", &mat2[i][j]);
        }
    }

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            sum=0;
            for (k = 0; k < 3; k++)
            {
                sum += mat1[i][k] * mat2[k][j];
            }
            mat3[i][j] = sum;
        }
    }

    printf("\nA x B:\n");

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            printf("%3d ", mat3[i][j]);
        }
        printf("\n");
    }

    printf("\nCreated By YOGI0360");

    return 0;
}