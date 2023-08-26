def threeSum(nums):
    result = []
    nums.sort()
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue  # 
        target = -nums[i]
        for j in range(i + 1, len(nums) - 1):
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue  
            complement = target - nums[j]
            k = binary_search(nums, j + 1, len(nums) - 1, complement)
            if k != -1:
                result.append([nums[i], nums[j], nums[k]])
    return result

def binary_search(nums, left, right, target):
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Usage
nums = []
print(threeSum(nums))
nums = [0]
print(threeSum(nums))
nums = [-1, 0, 1, 2, -1, -4]
print(threeSum(nums))