# what-day-of-the-week
enter a date and find out what day of the week it falls on.

# How It Works
This app makes use of the Doomsday Algorithm, devised by British mathematician John Conway. The algorithm bases on the fact that some dates always fall on the same weekday within any given year. These dates are called doomsdays. The numbers in parenthesis are the day number on a leap year.

| Day | Month |
|-----|-------|
| 3(4) | 1 |
|28(29)|2|
| 14 | 3 |
| 4 | 4 |
| 9 | 5 |
| 6 | 6 |
| 11 | 7 |
| 8 | 8 |
| 5 | 9 |
| 10 | 10 |
| 14 | 11 |
| 4 | 12 |

The day of the week that each months doomsday falls on in any given year can be calculated by first assigning a century code to the year. For simplicity's sake, the century codes for 1500 - 2600 are as follows. Note, the Georegorian calendar repeats every 400 years so this table can be easily expanded if needed.

| Century Code | years |
|--------------|-------|
| 0 | 1700's, 2100's, 2400's |
| 2 | 1600's, 2000's, 2400's |
| 3 | 1500's, 1900's, 2300's |
| 5 | 1800's, 2200's, 2600's |
