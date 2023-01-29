#include <stdio.h>

int main()
{
    int Ram, Shyam, Ajay;
    printf("Enter the age of Ram: ");
    scanf("%d", &Ram);
    printf("Enter the age of Shyam: ");
    scanf("%d", &Shyam);
    printf("Enter the age of Ajay: ");
    scanf("%d", &Ajay);

    if (Ram == Shyam && Ram == Ajay)
    {
        printf("All are of equal age\n");
    }
    else
    {
        if (Ram == Shyam && Ram != Ajay)
            printf("Ram and Shyam are equal\n");
        else
        {
            if (Shyam == Ajay && Shyam != Ram)
                printf("Shyam and Ajay are equal\n");
            else
            {
                if (Ram == Ajay && Ram != Shyam)
                    printf("Ram and Ajay are equal\n");
                else
                {
                    if (Ram < Shyam && Ram < Ajay)
                        printf("Ram is the youngest\n");
                    else
                    {
                        if (Shyam < Ram && Shyam < Ajay)
                            printf("Shyam is the youngest\n");
                        else
                            printf("Ajay is the youngest\n");
                    }
                }
            }
        }
    }
    return 0;
}