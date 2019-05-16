#!/usr/bin/python
"""reducer.py"""

from operator import itemgetter
import sys

data = { 'Max': {'Date': None, 'Station': None, 'Temperature': None}, \
    'Min': {'Date': None, 'Station': None, 'Temperature': None} }

# input comes from STDIN
for line in sys.stdin:
    # Remove leading and trailing whitespace
    line = line.strip()

    # Parses the input received from mapper.py
    station, date, temp = line.split('\t')

    # Convert temp to a datatype that can be compared with 
    # similar values
    temp = int(temp)

    # Checks to see whether or not an entry already exists 
    # in the dictionary. If not, initialize it.
    if data['Max']['Date'] == None:
        data['Max']['Date'] = date
        data['Max']['Station'] = station
        data['Max']['Temperature'] = temp
        
    else:
        if data['Max']['Temperature'] < temp:
            data['Max']['Date'] = date
            data['Max']['Station'] = station
            data['Max']['Temperature'] = temp

    # Checks to see whether or not an entry already exists
    # in the dictionary. If not, initialize it.
    if data['Min']['Date'] == None:
        data['Min']['Date'] = date
        data['Min']['Station'] = station
        data['Min']['Temperature'] = temp   
    else:
        if data['Min']['Temperature'] > temp:
            data['Min']['Date'] = date
            data['Min']['Station'] = station
            data['Min']['Temperature'] = temp    

print 'Hottest date and station'
print 'Date\tStation\tTemperature'
print '%s\%s\%s\t%s\t%s' % (data['Max']['Date'][4:6],data['Max']['Date'][6:8],data['Max']['Date'][0:4], \
    data['Max']['Station'],data['Max']['Temperature'])
print ''
print 'Coldest date and station'
print 'Date\tStation\tTemperature'
print '%s\%s\%s\t%s\t%s' % (data['Min']['Date'][4:6],data['Min']['Date'][6:8],data['Min']['Date'][0:4], \
    data['Min']['Station'],data['Min']['Temperature'])