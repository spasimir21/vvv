CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products(
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  imageUrl TEXT NOT NULL,
  expirationDate DATE NOT NULL,
  price FLOAT NOT NULL,
  barcode TEXT NOT NULL,
  status TEXT CHECK(status IN ('active', 'used', 'thrown')) NOT NULL,
  addedDate DATE NOT NULL,
  removeDate DATE,
  userId INTEGER NOT NULL,
  FOREIGN KEY(userId) REFERENCES users(id)
);
