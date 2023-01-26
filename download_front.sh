#!/bin/sh

printf "STARTING script ...\n\n";


printf "1 - Verifying if unzip is installed ...\n\n";

  unzip -v > /dev/null 2>&1;

  if test $? -ne 0 ; then    # bash POSIX >>  if [[ $(test $? -ne 0) ]] 

    printf "  FAIL - It seems unzip is not installed. Let's install it now ...\n\n" ;
    printf "  1.1 - Installing unzip ...\n\n"; 

      apt-get install unzip -y > /dev/null 2>&1 ;
        if ! test $? -eq 0 ; then 
          printf "  FAIL - Installation FAILED. \n\t Please, run this script with elevated privileges OR trying install unzip manually then go back here :) \n\n" ; 
          printf "See ya! \n\n";
          exit 1;
        else
          printf "    OK - unzip INSTALLED\n\n";
        fi
  else
    printf "  OK - unzip is already installed.\n\n";
  fi



printf "2 - Downloading repository ...\n\n" ; 

    wget -c -O front-repo  https://github.com/becauro/games-store-front/archive/refs/heads/main.zip > /dev/null 2>&1 ; 

  if test $? -ne 0 ; then 

    printf "  FAIL - download FAILED. \n\t Please, check parent folder permissions then go back here OR trying download repo manually :) \n\n" ; 
    printf "Exiting...! \n\n";
    exit 1;

  else 
    
    printf "  OK - Repo downloaded!\n\n" ;

  fi


printf "3 - Unziping file ... \n\n" ;

  unzip front-repo -d .. > /dev/null 2>&1 ; 

  if test $? -ne 0 ; then 

    printf "  FAIL - unziping FAILED. \n\t Please, check the current/parent folder permissions, run this script with elevated privileges \
    OR trying unzip the file manually :) \n\n" ; 

    printf "Exiting...! \n\n";
    exit 1;

  else 
    
    printf "  OK - file unziped! \n\n" ;

  fi



printf "4 - Deleting unziped file ... \n\n" ;

  rm front-repo > /dev/null 2>&1 ; 

  if test $? -ne 0 ; then 

    printf "  FAIL - Deletion FAILED. \n\t Please, check the current/parent folder permissions, run this script with elevated privileges \
    OR trying delete the file manually :) \n\n" ; 

    printf "Step Ignored. Moving to next one ... \n\n";

  else 
    
    printf "  OK - file Deleted ! \n\n" ;

  fi



printf "5 - Renaming extracted folder in parent one... \n\n" ;

  mv ../games-store-front-main ../games-store-front > /dev/null 2>&1 ; 

  if test $? -ne 0 ; then 

    printf "  FAIL - Renaming FAILED. \n\t Please, check the parent folder permissions, run this script with elevated privileges \
    OR trying rename the folder manually as 'games-store-front' :) \n\n" ; 

    printf "Step ignored ! \n\n";

  else 
    
    printf "  OK - Folder renamed ! \n\n" ;

  fi

printf "END of script!\n\n"



printf "6 - Changing folder permissions ... \n\n" ;

  chmod -R 777 ../games-store-front > /dev/null 2>&1 ; 

  if test $? -ne 0 ; then 

    printf "  FAIL - Permissions changing FAILED. \n\t Please,check the parent folder permissions, run this script with elevated privileges \
    OR trying to change the folder permissions manually :) \n\n" ; 

    printf "Step ignored ! \n\n";

  else 
    
    printf "  OK - Folder's permissions changed ! \n\n" ;

  fi

printf "END of script!\n\n"
