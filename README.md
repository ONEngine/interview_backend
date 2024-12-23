# interview_backend
This will be used for interview purpose only ..

Problem Statement
A Spring Boot application that manages products and categories using a PostgreSQL database. It has bugs and incomplete features. The candidate must:
1. Debug existing issues.
2. Implement missing features.
3. Optimize database queries.

Expected API Behavior
1. Add Product (POST /products)
    * Input: { "name": "Tablet", "price": 299.99, "category": { "id": 1 } }
    * Output: 201 Created with the saved product.
    * Handles errors like invalid inputs and non-existent category.
2. Fetch Products by Category (GET /products/category/{categoryId})
    * Input: GET /products/category/1
    * Output: List of products in category 1.
    * Returns 404 if the category does not exist.
3. Update Product (PUT /products/{id})
    * Input: { "name": "Updated Name", "price": 399.99, "category": { "id": 2 } }
    * Output: Updated product object.
4. Delete Product (DELETE /products/{id})
    * Input: DELETE /products/3

Bug Fixes:
1. Add validation for Product in the addProduct endpoint:
    * Ensure name is not null or empty.
    * Ensure price is greater than 0.
    * Ensure categoryId exists in the database.
2. Modify the /products/category/{categoryId} endpoint to return a 404 Not Found if the category does not exist.

Enhancements:
1. Add a PUT /products/{id} endpoint to update a product's details (name, price, or category).
2. Add a DELETE /products/{id} endpoint to delete a product by its ID.


