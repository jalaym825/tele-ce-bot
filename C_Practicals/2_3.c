/*Created by YOGI0360*/

#include<stdio.h>

void main() {
    long basic_salary, DA, HRA, MA, TA, PF, IT, gross_salary, net_salary;

    printf("enter basic salary: ");
    scanf("%ld", &basic_salary);

    DA = basic_salary*70/100;
    HRA = basic_salary*7/100;
    MA = basic_salary*2/100;
    TA = basic_salary*4/100;
    PF = basic_salary*12/100;
    IT = 500;
    gross_salary = basic_salary+DA+HRA+MA+TA;
    net_salary = gross_salary-PF-IT;

    printf("Your Basic Salary: %ld\n", basic_salary);
    printf("DA of Basic Salary: %ld\n", DA);
    printf("HRA of Basic Salary: %ld\n", HRA);
    printf("MA of Basic Salary: %ld\n", MA);
    printf("TA of Basic Salary: %ld\n",TA);
    printf("PF of Basic Salary: %ld\n", PF);
    printf("Gross Salary: %ld\n", gross_salary);
    printf("Net Salary: %ld\n\n", net_salary);
    printf("Created by YOGI0360");
}