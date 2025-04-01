def MaxLoss(arr):
    maxi=0
    for i in range(len(arr)):
        for j in range(i+1,len(arr)):
            if arr[i]>arr[j] and maxi<arr[i]-arr[j]:
                maxi=abs(arr[j]-arr[i])
    return maxi
arr=list(map(int,input("Enter the Stock Prices by day: ").split()))
print(MaxLoss(arr))