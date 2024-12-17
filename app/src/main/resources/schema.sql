CREATE TABLE IF NOT EXISTS category (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS product (
                         id SERIAL PRIMARY KEY,
                         name VARCHAR(255) NOT NULL,
                         price DOUBLE PRECISION NOT NULL,
                         stock_quantity INT NOT NULL,
                         category_id INT,
                         FOREIGN KEY (category_id) REFERENCES category(id)
);
CREATE TABLE IF NOT EXISTS customer (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          email VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
                         id SERIAL PRIMARY KEY,
                         customer_id INT,
                         order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         total_amount DOUBLE PRECISION NOT NULL,
                         FOREIGN KEY (customer_id) REFERENCES customer(id)
);
