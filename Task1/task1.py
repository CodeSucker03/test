
def StringsMostFrequentLength(input):
    result = []
    if len(input) == 0:
       print("Input is empty")
       return result
    else:
        eachInputLen = [len(x) for x in input]
        frequency = {}
        for i in eachInputLen:
            if i in frequency:
                frequency[i] += 1
            else:
                frequency[i] = 1
        maxFrequencyLen = max(frequency, key=frequency.get)
        for x in input:
            if len(x) == maxFrequencyLen:
                result.append(x)
        return result 
           

