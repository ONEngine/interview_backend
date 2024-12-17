package com.interview.backend.service;

import com.interview.backend.model.Product;
import com.interview.backend.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepo productRepository;

    public List<Product> getAllProducts() {
        List<Product>  products = productRepository.findAll();
        System.out.println(products);
        return products;
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

}
