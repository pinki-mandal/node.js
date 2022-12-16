// reverse an array

// a=[1,2,3,4,5,6]
// o = [];
// for (var i = a.length-1; i> -1; i--){
//         o+=(a[i]);
//     }
// console.log(o)




// mean
// a=[1,2,3,4,5]
// sum=0
// count=0
// avg=0
// for (i of a){
//     sum+=i
//     count+=1
//     avg=sum/count
// }
// console.log(avg)


// median
// n_num = [1, 2, 3, 4, 5]
// n = len(n_num)
  
// if n % 2 == 0:
//     median1 = n_num[n//2]
//     median2 = n_num[n//2 - 1]
//     median = (median1 + median2)/2
// else:
//     median = n_num[n//2]
// print("Median is: " + str(median))
        
    
// union and intersection
// num=[1,2,3,4]
// num1=[4,5,6,7]
// a=[]
// i=0
// while(i<num.length){
//     a.push(num[i])
//     a.push(num1[i])
//     i++
// }
// // console.log(a)
// console.log(a)
// b=[]
// c=[]
// i=0
// while (i<a.length){
//     if (!b.includes(a[i])){
//         b.push(a[i])
//     }
//     else{
//         c.push(a[i])
//     }
//     i+=1
// }
// console.log(b)
// console.log(c)



// dublicate
// def duplicate(li):
//     n=len(li)
//     dup=[]
//     for i in range(n):
//         k = i + 1
//         for j in range(k,n):
//             if li[i] == li[j] and li[i] not in dup:
//                 dup.append(li[i])
//     return dup

// li=[ 1,2,1,3,4,5]
// print("Duplicate integeres: ",duplicate(li))


// // merge two list
// def mergeArrays(nums1, nums2, m, n):
//     nums3 = [None] * (m+n)
//     i = 0
//     j = 0
//     k = 0
//     while i < m:   
//         nums3[i]=nums1[i]
//         i=i+1
//     i=0
//     while i<n:
//         t=nums2[i]
//         j=m-1
//         while j>=0:
//             if nums3[j]>t:
//                 nums3[j+1]=nums3[j]
//             else:
//                 break
//             j=j-1
//         m=m+1
//         nums3[j+1]=t
//         i=i+1
//     for i in nums3:
//         print(str(i), end = " ")
// nums1 = [1, 3, 5, 7]
// m = len(nums1)

// nums2= [2, 4, 6, 8]
// n = len(nums2)
// mergeArrays(nums1, nums2, m, n)


// union 
// list1 = [1, 2, 3, 4, 5, 6]
// print("First list is:", list1)
// list2 = [2, 4, 6, 8, 10, 12]
// print("Second list is:", list2)
// newList = []
// newList.extend(list1)
// for element in list2:
//     if element not in newList:
//         newList.append(element)
// print("Union of the lists is:", newList)





// intersection
// first_set = [3,2,1,3,4]
// second_set =[2,3,4,5,6]
// for i in first_set:
//     for j in second_set:
//         if i==j:
//             print(i)




// a=[2,3,41,4,1,6,7,0,9,20]
// for i in range(len(a)):
//     for j in range(len(a)-1):
//         if a[j]<a[j+1]:
//             a[j],a[j+1]=a[j+1],a[j]
// print(a[1])



// # Ascending
// # a=[2,3,41,4,1,6,7,0,9,22]
// # i=0
// # while i<len(a):
// #     j=0
// #     while j<len(a)-1:
// #         if a[j]>a[j+1]:
// #             a[j],a[j+1]=a[j+1],a[j]
// #         j+=1
// #     i+=1
// # print(a)


// N=int(input())
// s_e=0
// s_o=0
// for i in range(1,N*2+1):
//     if i%2!=0:
//         s_o+=i
//     else:
//         s_e+=i
// print(s_o)
// print(s_e)
