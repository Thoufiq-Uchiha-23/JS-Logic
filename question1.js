// Merging two arrays of data fetched from separate APIs into a single list

const names = ["John", "Jane", "Doe", "Smith"]
const lastnames = ["Doeieyein", "Smith", "Johnson", "Williams"]

const fullnames = [...names, ...lastnames]
// (8) ['John', 'Jane', 'Doe', 'Smith', 'Doeieyein', 'Smith', 'Johnson', 'Williams']