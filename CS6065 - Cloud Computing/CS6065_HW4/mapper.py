#!/usr/bin/python
"""mapper.py"""

import sys, csv

# csv reader
# iterate through each line
reader = csv.reader(iter(sys.stdin.readline, ''))

# Skips the column header
next(reader)

for row in csv.reader(iter(sys.stdin.readline, '')):
        # Remove leading and trailing whitespace
        for i in range(len(row)):
                row[i] = row[i].strip()

        # Create a list within a given range of csv row
        sliceList = row[24:]
        
        # Removes potential empty fields read during array slice
        filterList = filter(None, sliceList)

        # Prints each value within the compiled, filtered, list
        for a in filterList:
                print '%s\t%s' % (a, 1)
