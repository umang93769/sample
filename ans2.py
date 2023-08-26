def is_palindrome(s):
    return s == s[::-1]

def longest_palindromic_substring(s):
    n = len(s)
    max_length = 0
    result = ""

    for i in range(n):
        for j in range(i, n):
            substring = s[i:j+1]
            if is_palindrome(substring) and len(substring) > max_length:
                max_length = len(substring)
                result = substring

    return result

# Usage
s = "babad"
print(longest_palindromic_substring(s))
s = "cbbd"
print(longest_palindromic_substring(s))