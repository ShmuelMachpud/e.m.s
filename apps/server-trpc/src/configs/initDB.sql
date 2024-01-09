CREATE TABLE IF NOT EXISTS employees(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	firstName VARCHAR(21) NOT NULL,
	lastName  VARCHAR(21) NOT NULL
)
	
INSERT INTO employees (firstName, lastName)
	VALUES
	('shmuel', 'machpud'),
	('sara', 'machpud')
	

ALTER TABLE employees
ADD COLUMN createdAt date;

ALTER TABLE employees
ADD COLUMN updatedAt date;