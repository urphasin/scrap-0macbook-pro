def areAnagrams(str1: str, str2: str) -> bool:
    if len(str1) != len(str2):
        return False
    
    freqStr1 = {}
    freqStr2 = {}

    for keys, values in freqStr1.items():
        