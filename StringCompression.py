def stringCompression(s):
    if not s:
        return s
    comp = []
    cur = s[0]
    count = 1
    for i in range(1, len(s)):
        if s[i] == cur:
            count += 1
        else:
            comp.append(cur)
            comp.append(str(count))
            cur = s[i]
            count = 1
    comp.append(cur)
    comp.append(str(count))
    res = ''.join(comp)
    return res if len(res) < len(s) else s

# Testing
string = "aaabcccccaaa"
print("Test1:", stringCompression(string))  # a3b1c5a3
string = ""
print("Test2:", stringCompression(string))  # ""