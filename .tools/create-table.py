def read_nanoids_from_file(filename):
    nanoTable = "const nanoids = ["
    with open(filename, 'r') as file:
        for line in file:
            nanoTable += ("'"+line.strip()+"',")
    nanoTable += "]"
    print(nanoTable)
    return nanoTable

def saveArrayToFile(string, filename):
    with open(filename, "w") as file:
        file.write(f'{string}\n')
    


if __name__ == "__main__":
    filenameIds = 'nanoids.txt'
    filenameTable = 'table.txt'
    nanoid_list = read_nanoids_from_file(filenameIds)
    saveArrayToFile(nanoid_list, filenameTable)
    print("Done!")