def areAnagrams(str1: str, str2: str) -> bool:
    if len(str1) != len(str2):
        return False

    for i in range(len(str1)):
        