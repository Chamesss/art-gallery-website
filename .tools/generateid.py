from nanoid import generate

def generate_nanoids(num_ids, filename):
    nanoids = [generate() for _ in range(num_ids)]
    with open(filename, 'w') as file:
        for nanoid in nanoids:
            file.write(f'{nanoid}\n')

if __name__ == '__main__':
    generate_nanoids(100, 'nanoids.txt')
    print("100 NanoIDs have been generated and saved to nanoid_tokens.txt")