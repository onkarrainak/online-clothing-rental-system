package com.example.onlineclothingrentalsystem.service;

import java.util.List;
import com.example.onlineclothingrentalsystem.entity.Product;
import com.example.onlineclothingrentalsystem.entity.ProductCategory;
import com.example.onlineclothingrentalsystem.entity.ProductPaging;

public interface ProductService {
	Product addProduct(Product p);

    List<Product> getAllProduct();

    Product getProductById(long productId); // Added method

    Product updateProduct(long id, Product p); // Updated method signature

    void deleteProductById(long id);
	ProductPaging getAllPageProduct(int pageNo, int pageSize);  


}
