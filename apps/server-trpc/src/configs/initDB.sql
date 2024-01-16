CREATE TABLE IF NOT EXISTS employees(
	Id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	first_name VARCHAR(21) NOT NULL,
	last_name  VARCHAR(21) NOT NULL
)

INSERT INTO employees (first_name, last_name)
	VALUES
	('Shmuel', 'Machpud'),
	('Sara', 'Machpud'),
	('Nitai', 'Machpud')




-- מציאת כל הטבלאות
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE';