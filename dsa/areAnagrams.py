def areAnagrams(str1: str, str2: str) -> bool:
    if len(str1) != len(str2):
        return False
    
    freqStr1 = {}
    freqStr2 = {}

    for s in str1:
        if s not in freqStr1:
            freqStr1[s] = 1        

    for keys, values in freqStr1.items():
        