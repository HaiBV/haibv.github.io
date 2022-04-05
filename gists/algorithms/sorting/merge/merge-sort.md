Like QuickSort, Merge Sort is a Divide and Conquer algorithm. 

It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. 

The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. 

Step by step
```sh
MergeSort(arr[], l,  r)
If r > l
      1. Find the middle point to divide the array into two halves:
              middle m = l+ (r-l)/2
      2. Call mergeSort for first half:
              Call mergeSort(arr, l, m)
      3. Call mergeSort for second half:
              Call mergeSort(arr, m+1, r)
      4. Merge the two halves sorted in step 2 and 3:
              Call merge(arr, l, m, r)
```

Pseudocode of Merge Sort algorithm can be written as follows:
```sh
PROCEDURE function mergeSort
   FOR each element of the master list indexed by i
 
       if ( i <= 1 ) return a
 
       var left = a[0] to a[i/2]
       var right = a[i/2+1] to a[i]
 
       left = mergeSort( left )
       right = mergeSort( right )
 
       return merge( left,right )
 
   END FOR
END PROCEDURE
 
PROCEDURE function mergeSort
    WHILE length(left) > 0 and length(right) > 0
        if first(left) â‰¤ first(right)
            append first(left) to result
            left = rest(left)
        else
            append first(right) to result
            right = rest(right)
 
    IF length(left) > 0
        append left to result
    END IF
 
    IF length(right) > 0
        append right to result
    END IF
 
    return result
END PROCEDURE
```

![Merge-sort-example](Merge-sort-example-300px.gif)
![Merge_sort_algorithm_diagram](Merge_sort_algorithm_diagram.svg)
