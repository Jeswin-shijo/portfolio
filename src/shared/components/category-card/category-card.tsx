import "./category-card.css";

type CategoryCardProps = {
  categories: string[];
  tags: string[];
  activeCategory?: string | null;
  activeTag?: string | null;
  matchedCategories?: string[];
  matchedTags?: string[];
  onCategorySelect?: (value: string | null) => void;
  onTagSelect?: (value: string | null) => void;
};

const CategoryCard = ({
  categories,
  tags,
  activeCategory = null,
  activeTag = null,
  matchedCategories = [],
  matchedTags = [],
  onCategorySelect,
  onTagSelect,
}: CategoryCardProps) => {
  return (
    <div className="category-card py-5 p-4">
      <h5 className="section-title">Categories</h5>
      <ul className="category-list">
        <li>
          <button
            type="button"
            className={`category-card__option ${
              !activeCategory ? "active" : ""
            }`}
            onClick={() => onCategorySelect?.(null)}
          >
            {!activeCategory ? <span className="highlight-bar"></span> : null}
            All Categories
          </button>
        </li>
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const isMatch = matchedCategories.includes(category);

          return (
            <li key={category}>
              <button
                type="button"
                className={`category-card__option ${isActive ? "active" : ""} ${
                  isMatch ? "is-match" : ""
                }`}
                onClick={() => onCategorySelect?.(isActive ? null : category)}
              >
                {isActive || isMatch ? <span className="highlight-bar"></span> : null}
                {category}
              </button>
            </li>
          );
        })}
      </ul>

      <h5 className="section-title">Tags</h5>
      <div className="tags">
        {tags.map((tag) => {
          const isActive = activeTag === tag;
          const isMatch = matchedTags.includes(tag);

          return (
            <button
              key={tag}
              type="button"
              className={`tag ${isActive ? "active" : ""} ${
                isMatch ? "is-match" : ""
              }`}
              onClick={() => onTagSelect?.(isActive ? null : tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCard;
