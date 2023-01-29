/*Created By YOGI0360*/

#include <stdio.h>
#include <stdlib.h>
int main()
{
    int num, i, *ptr;
    float sum = 0, Avg = 0;
    printf("Enter number of elements: ");
    scanf("%d", &num);
    ptr = (int *)malloc(num * sizeof(int));
    if (ptr == NULL)
    {
        printf("Error! memory not allocated.");
        exit(0);
    }
    printf("Enter elements of array: \n");
    for (i = 0; i < num; ++i)
    {
        scanf("%d", ptr + i);
        sum += *(ptr + i);
    }
    printf("Avg = %0.2f", sum / num);
    free(ptr);
    printf("\n\nCreated By YOGI0360");
    return 0;
}