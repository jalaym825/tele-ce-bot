/*Created By YOGI0360*/
#include <stdio.h>
#include <string.h>

int main()
{
    int arr[10];
    int i, *marks;
    int dis = 0, first = 0, pass = 0, fail = 0;
    for (i = 0; i < 10; i++)
    {
        printf("Enter Marks of Student%d:", (i + 1));
        scanf("%d", &arr[i]);
    }
    for (i = 0; i < 10; i++)
    {
        marks = &arr[i];
        if (*marks >= 70)
        {
            dis++;
        }
        if (*marks >= 60 && *marks < 70)
        {
            first++;
        }
        if (*marks >= 40 && *marks < 60)
        {
            pass++;
        }
        if (*marks < 40)
        {
            fail++;
        }
    }
    printf("DISTINCTION: %d\n", dis);
    printf("FIRST CLASS: %d\n", first);
    printf("PASSED: %d\n", pass);
    printf("FAIL: %d\n", fail);
    printf("\n\nCreated By YOGI0360");
    return 0;
}
