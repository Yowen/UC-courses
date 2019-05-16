#!/usr/bin/python
"""mapper.py"""

import sys, csv

# csv reader
# iterate through each line
for row in csv.reader(iter(sys.stdin.readline, '')):
    # Remove leading and trailing whitespace
    for i in range(len(row)):
        row[i] = row[i].strip()

    # row[0] = station
    # row[1] = date
    # row[2] = TMIN or TMAX
    # row[3] = Temperature in 10ths of degrees celsius

    #if row[5] == '':
    #    print '%s\t%s\t%s' % (row[0],row[1],row[3])
    print '%s\t%s\t%s' % (row[0],row[1],row[3])
