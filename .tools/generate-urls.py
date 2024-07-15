def generate_links(inputFile, outputFile, modelId):
    prefixUrl = "localhost:3000/c/valid?token="
    with open(inputFile, 'r') as file:
        for line in file:
            url = (prefixUrl + line.strip() + "&t=" + modelId)
            saveStringToFile(url, outputFile)
    return True

def saveStringToFile(string, filename):
    with open(filename, "a") as file:
        file.write(f'{string}\n')
    


if __name__ == "__main__":
    f1 = 'ids-model-one.txt'
    f2 = 'ids-model-two.txt'
    f3 = 'ids-model-three.txt'
    fs1 = 'result-model-one.txt'
    fs2 = 'result-model-two.txt'
    fs3 = 'result-model-three.txt'
    id1 = "hrMBp1EPXCarNZRGcZivS"
    id2 = "VBKy-tnCdXfzl-TeNSutV"
    id3 = "KLm-IuknYKltxEgQ_Lw_B"
    r1 = generate_links(f1, fs1, id1)
    r2 = generate_links(f2, fs2, id2)
    r3 = generate_links(f3, fs3, id3)
    if r1 and r2 and r3:
        print("Done!")
