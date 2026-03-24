def areAnagrams(str1: str, str2: str) -> bool:
    if len(str1) != len(str2):
        return False
    
    freq1 = freqeuncy1(str1)
    freq2 = frequency2(str2)



def freqeuncy1(S: str) -> dict:
    freq = {}
    for s in S:
        if s not in freq:
            freq[s] = 0
        freq[s] += 1
    return freq

def frequency2(S: str) -> dict:
    freq = {}
    for s in freq:
        freq.setdefault(s, 0)
        freq[s] += 1
    return freq

areAnagrams("otito", "ttooi")