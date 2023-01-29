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

    printf("Enter your Basic Salary: %ld\nDA of Basic Salary: %ld\nHRA of Basic Salary: %ld\nMA of Basic Salary: %ld\nTA of Basic Salary: %ld\nPF of Basic Salary: %ld\nGross Salary: %ld\nNet Salary: %ld\n\n", basic_salary, DA, HRA, MA, TA, PF, gross_salary, net_salary);
}