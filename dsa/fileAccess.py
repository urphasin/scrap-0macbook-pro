import os
print(os.getcwd())

MyList = []
try:
    with open("randomFiles/textFiles.txt", "r+") as f:
        for line in f:
            line = line.strip()
            MyList.append(line)
    print(MyList)   

except Exception as e:
    print(e)