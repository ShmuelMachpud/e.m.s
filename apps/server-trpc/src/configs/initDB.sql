CREATE TABLE IF NOT EXISTS employees(
	Id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	first_name VARCHAR(21) NOT NULL,
	last_name  VARCHAR(21) NOT NULL,
	email VARCHAR(21) NOT NULL,
	phone_number VARCHAR(21) NOT NULL,
	branch_number INT NOT NULL,
	role VARCHAR(21) NOT NULL
)

INSERT INTO employees (first_name, last_name, email, phone_number, branch_number, role )
	VALUES
	('Shmuel', 'Machpud', 'Sm0524432584@gmail.com', 0524432584, 1, 'director'),
	('Sara', 'Machpud', 'Sm0529514802@gmail.com', 0529514802, 2, 'cashier')


CREATE TABLE IF NOT EXISTS branches(
	branch_number INT PRIMARY KEY NOT NULL,
	branch_name  VARCHAR(21) NOT NULL,
	branch_phone INT NOT NULL,
	branch_address VARCHAR(500) NOT NULL
)

INSERT INTO branches (branch_number, branch_name, branch_phone, branch_address)
	VALUES
	(1, 'Landa', 036885598, 'Landa 3 Bney Brak'),
	(2, 'Warsaw garden', 036188812, 'Rabbi Akiva 112 Bney Brak')




-- מציאת כל הטבלאות
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE';