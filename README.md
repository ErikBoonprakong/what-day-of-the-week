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

We can then do some calculations using the last two digits of year. E.G
```
Year = yyxx

So for example for the year 2014

xx = 14
a = 2 (century code)
b = xx / 12 = 14 / 12 = 1 (rounded down)
c = remainder from previous division = 2
d = c / 4 = 2 / 4 = 0 (rounded down)

Then our doomsday value, dd, is equivalent to the remainder of 
(a + b + c + d) / 7 = (2 + 1 + 2 + 0) / 7 = 0 remainder 5
dd = 5

And finally, we order our days of the week as such
weekdayArray = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
```
So in 2014, every doomsday falls on the fifth day of the week (Friday), or the fifth index in our weekdayArray.

Now all that's left to do is work out how many days to offset this by depending on the date entered
```
The offset is equal to the remainder of <entered day number> / 7
Then we add the remainder to dd and then recalculet the remainder when divided by 7 to get the day of the week for that particualr date
```
erik




