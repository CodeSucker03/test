def partition(arr, start, end):
    pivot = arr[end]
    i = start - 1
    for j in range(start, end):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[end] = arr[end], arr[i + 1]
    return i + 1

def quickSort(arr,start, end):
   if start < end:
     pivot = partition(arr, start, end)
     quickSort(arr, start, pivot - 1)
     quickSort(arr, pivot + 1, end)
   return arr

  
def sumOfTwoLargestIntegers(arr):
   if len(arr) < 2:
     return "Array must contain at least two elements"
   quickSort(arr, 0, len(arr) - 1)
   return arr[-1] + arr[-2]

   