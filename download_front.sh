#!/bin/sh

printf "STARTING script ...\n\n";


printf "1 - Verifying if unzip is installed ...\n\n";

  unzip -v > /dev/null 2>&1;

  if test $? -ne 0 ; then    # bash POSIX >>  if [[ $(test $? -ne 0) ]]

    printf "  It seems unzip is not installed. Let's install it now ...\n\n" ;
    printf "  1.1 - Installing unzip ...\n\n";

      apt-get install unzip -y > /dev/null 2>&1 ;
        if ! test $? -eq 0 ; then

          printf '  FAIL - Installation FAILED. \n"
          printf "  Possible solutions here are:\n\n" ;
          printf "    # Please, execute this script with elevated privileges
          printf "    # OR: trying install unzip manually then go back here %s \n\n' ':)' ;
          printf "See ya! \n\n";
          exit 1;
        else
          printf "    OK - unzip INSTALLED\n\n";
        fi
  else
    printf "  OK - unzip is ALREADY installed.\n\n";
  fi



printf "2 - Verifying if repository is already downloaded ...\n\n" ;

  ls front-repo > /dev/null 2>&1

    if test $? -ne 0; then

#######

      ls ../games-store-front-main > /dev/null 2>&1

      if test $? -ne 0; then

        ls ../games-store-front > /dev/null 2>&1

        if test $? -ne 0; then

          printf "  Downloading repository ...\n\n" ;

          wget -c -O front-repo  https://github.com/becauro/games-store-front/archive/refs/heads/main.zip > /dev/null 2>&1 ;

          if test $? -ne 0 ; then

            printf "  FAIL - download FAILED. \n"
            printf "  Possible solutions here are:\n\n" ;

            printf "    # Check parent folder permissions then execute this script again\n"
            printf "    # OR: trying to download the frontend repo manually at https://github.com/becauro/games-store-front/archive/refs/heads/main.zip and rename it to 'front-repo' \n\n" ;
            printf "  When you get it done, execute this script again\n\n"
            printf "Exiting...! \n\n";
            exit 1;

          else

            printf "  OK - Repo downloaded!\n\n" ;

          fi

        else

          printf "  OK - Repo ALREADY downloaded!\n\n" ;

        fi

      else

        printf "  OK - Repo ALREADY downloaded!\n\n" ;

      fi

#######

    else

      printf "  OK - Repo ALREADY downloaded!\n\n" ;

    fi



printf "3 - Verifying unziping ...\n\n";

  ls ../games-store-front-main > /dev/null 2>&1

  if test $? -ne 0; then

    ls ../games-store-front > /dev/null 2>&1

    if test $? -ne 0; then

      printf "Unziping the file ... \n\n" ;

      unzip front-repo -d .. > /dev/null 2>&1 ;

      if test $? -ne 0 ; then

        printf "  FAIL - unziping FAILED.\n"
        printf "  Possible solutions --- If you are under the 'games-store-back' folder:\n\n" ;
        printf "    # Trying unzip the file manually.\n"
        printf "    # OR: If the folder is already extrated, rename it to 'games-store-front'\n\n"

        print " When you get it done, execute this script again\n\n"
        printf "  Exiting...! \n\n";
        exit 1;


      else

        printf "  OK - file unziped! \n\n" ;

      fi

    else

      printf "  OK - file ALREADY unziped! \n\n" ;

    fi

  else

    printf "  OK - file ALREADY unziped! \n\n" ;

  fi



printf "4 - Deleting unziped file ... \n\n" ;

  rm front-repo > /dev/null 2>&1 ;

  if test $? -ne 0 ; then

    printf "  WARNING - Deletion FAILED. Maybe you already did it by yourself.\n"
    printf "  If you not, possible solutions here are: \n\n"
    printf "    # Execute this script with elevated privileges \n"
    printf "    # OR: Trying delete the file manually \n\n" ;

    printf "  NOTE: This step is being ignored. \n\n";

  else

    printf "  OK - file Deleted! \n\n" ;

  fi


printf "5 - Checking the extracted folder name... \n\n" ;

    ls ../games-store-front > /dev/null 2>&1

    if test $? -ne 0; then

      printf " Renaming extracted folder ... \n\n" ;

      mv ../games-store-front-main ../games-store-front > /dev/null 2>&1 ;

      if test $? -ne 0 ; then

        printf "  FAIL - Renaming FAILED. \n"
        printf "  Possible solutions here are: \n\n"
        printf "    # Please, trying to rename the extracted folder to 'games-store-front' MANUALLY \n\n" ;
        printf "\nExiting...! \n\n";
        exit 1;

      else

        printf "  OK - Folder renamed ! \n\n" ;

      fi

    else

      printf "  OK - file ALREADY renamed! \n\n" ;

    fi


printf "6 - Changing folder permissions ... \n\n" ;

  chmod -R 777 ../games-store-front > /dev/null 2>&1 ;

  if test $? -ne 0 ; then

    printf "  WARNING - Permissions changing FAILED. Maybe you already did it by yourself.\n"
    printf "  If you not, possible solutions here are: \n\n"
    printf "    # Execute this script with elevated privileges \n"
    printf "    # Try set folder permissions manually.\n"
    printf "      Under the 'games-store-back' folder, just type this command: chmod -R 777 ../games-store-front\n\n"
    printf "=========\n"

  else

    printf "  OK - Folder permissions set ! \n\n" ;

  fi

printf "END of script!\n\n"

printf "Please, check the parent folder.\n\n"
