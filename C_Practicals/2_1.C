#include <stdio.h>

void main()
{
  long TotalPopulation = 80000;
  long Literate = TotalPopulation * 48 / 100;
  long Men = TotalPopulation * 52 / 100;
  long LiterateMen = Men * 35 / 100;
  long IlliterateMen = Men - LiterateMen;
  long Women = TotalPopulation - Men;
  long LiterateWomen = Literate - LiterateMen;
  long IlliterateWomen = Women - LiterateWomen;
   
  printf("Total Population: %ld\n", TotalPopulation);
  printf("Number of Literate (Men + Women): %ld\n", Literate);
  printf("Number of Men: %ld\n", Men);
  printf("Number of Literate Men: %ld\n", LiterateMen);
  printf("Number of Illiterate Men: %ld\n", IlliterateMen);
  printf("Number of Women: %ld\n", Women);
  printf("Number of Literate Women: %ld\n", LiterateWomen);
  printf("Number of illiterate Women: %ld\n", IlliterateWomen);
}


