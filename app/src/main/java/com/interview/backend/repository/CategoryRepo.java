package com.interview.backend.repository;

import com.interview.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo  extends JpaRepository<Category,Long> {
}
