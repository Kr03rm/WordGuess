START GAME

Generate a random five-digit number

Set attempts to 6
Set timer to 120 seconds
Set score to 0

WHILE game is active:

    Ask player to enter a five-digit guess

    IF input is not five digits:
        Display error message

    ELSE:
        Compare guess with hidden number

        FOR each digit:
            IF digit is correct and in correct position:
                Display GREEN
            ELSE IF digit exists in hidden number:
                Display YELLOW
            ELSE:
                Display GREY

        Reduce attempts by 1

        IF guess equals hidden number:
            Calculate score
            Display WIN message
            End game

        ELSE IF attempts equals 0:
            Display LOSE message
            Reveal hidden number
            End game

        ELSE:
            Ask player to guess again

    IF timer reaches zero:
        End game

END WHILE

IF player selects restart:
    Start a new game

END
