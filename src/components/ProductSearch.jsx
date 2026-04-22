import { useState } from 'react';

export default function ProductSearch({ query, onQueryChange }) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 600,
        margin: '28px auto',
        padding: '0 16px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#e8eaf0',
          borderRadius: 50,
          boxShadow: '6px 6px 12px #c5c7cf, -6px -6px 12px #ffffff',
          padding: '12px 18px 12px 22px',
          gap: 8,
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          id="product-search-input"
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            background: 'transparent',
            fontSize: 15,
            color: '#2d3148',
            fontFamily: "'DM Sans', sans-serif",
            caretColor: '#1a5fa8',
          }}
        />

        {/* Clear button */}
        {query && (
          <button
            onClick={() => onQueryChange('')}
            aria-label="Clear search"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 4,
              display: 'flex',
              alignItems: 'center',
              color: '#888',
              borderRadius: '50%',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1a5fa8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}

        {/* Search icon */}
        <div style={{ display: 'flex', alignItems: 'center', color: '#1a5fa8', opacity: 0.75 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
    </div>
  );
}
