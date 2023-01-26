#!/bin/dash

printf "STARTING script ...\n\n";


printf "1 - Verifying if unzip is installed ...\n\n";

  unzip -v > /dev/null 2>&1;

  if test $? -ne 0 ; then    # bash POSIX >>  if [[ $(test $? -ne 0) ]] 

    printf "\t FAIL - It seems unzip is not installed. Let's install it now ...\n\n" ;
    printf "  1.1 - Installing unzip ...\n\n"; 

      apt-get install unzip -y > /dev/null 2>&1 ;
        if ! test $? -eq 0 ; then 
          printf "\t FAIL - Installation FAILED. \n\t Please, run this script with elevated privileges OR trying install unzip manually then go back here :) \n\n" ; 
          printf "See ya! \n\n";
          exit 1;
        else
          printf "    OK - unzip INSTALLED\n\n";
        fi
  else
    printf "  OK - unzip is already installed.\n\n";
  fi



printf "2 - Downloading repository ...\n\n" ; 

    wget -O MY-REPO https://github.com/becauro/games-store-front/archive/refs/heads/main.zip > /dev/null 2>&1 ; 

  if test $? -ne 0 ; then 

    printf "\t FAIL - download FAILED. \n\t Please, check parent folder permissions then go back here OR trying download repo manually :) \n\n" ; 
    printf "Exiting...! \n\n";
    exit 1;

  else 
    
    printf "  OK - Repo downloaded!\n\n" ;

  fi

