import React, { useState } from 'react';
import './category-card.css';

const CategoryCard = () => {
  const categories = [
    'Adventure',
    'International',
    'Manali',
    'Bali',
    'Product Category',
    'FAQ',
  ];

  const [activeCategory, setActiveCategory] = useState('Adventure');

  return (
    <div className="category-card py-5 p-4">
      <h5 className="section-title">Categories</h5>
      <ul className="category-list">
        {categories.map((cat) => (
          <li
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {activeCategory === cat && <span className="highlight-bar"></span>}
            {cat}
          </li>
        ))}
      </ul>

      <h5 className="section-title">Tags</h5>
      <div className="tags">
        <span className="tag">International</span>
        <span className="tag">Camera</span>
        <span className="tag">Singapore</span>
        <span className="tag">Camp</span>
      </div>
    </div>
  );
};

export default CategoryCard;
