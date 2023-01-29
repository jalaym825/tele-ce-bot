/*Created By YOGI0360*/
#include <stdio.h>
#include <stdlib.h>
struct student_details
{
    int Roll_no, age, class;
    char name[100], branch[50];
};
void main()
{
    struct student_details *strdet;
    int n, i;
    printf("Enter the number of students who's details you want to submit: ");
    scanf("%d", &n);
    strdet = (struct student_details *)malloc(n * sizeof(struct student_details));
    for (i = 0; i < n; i++)
    {
        printf("Enter the details of %dth student\n", i + 1);
        printf("Name of student: ");
        scanf(" ");
        gets((strdet + i)->name);
        printf("Roll.No of student: ");
        scanf("%d", &(strdet + i)->Roll_no);
        printf("Age of student: ");
        scanf("%d", &(strdet + i)->age);
        printf("Class of the student: ");
        scanf("%d", &(strdet + i)->class);
        printf("Branch of student: ");
        scanf(" ");
        gets((strdet + i)->branch);
        printf("\n");
    }
    printf("The details of the students are as follows:\n\n");
    for (i = 0; i < n; i++)
    {
        printf("Sr.No:%d\nRoll.No.:%d\nName:%s\nAge:%d\nClass:%d\nBranch:%s\n", i + 1, (strdet + i)->Roll_no, (strdet + i)->name, (strdet + i)->age, (strdet + i)->class, (strdet + i)->branch);
    }
    printf("\n\nCreated By YOGI0360");
}
