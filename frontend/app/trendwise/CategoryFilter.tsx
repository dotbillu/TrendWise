'use client';

interface CategoryFilterProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
  activeCategory: string;
}

export default function CategoryFilter({ categories, onCategoryChange, activeCategory }: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <h3 className="filter-title">Filter by Category</h3>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}