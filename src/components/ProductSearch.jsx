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
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.7)',
          borderRadius: 50,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.3)',
          padding: '10px 20px',
          gap: 12,
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="SEARCH..."
          aria-label="Search products"
          id="product-search-input"
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            background: 'transparent',
            fontSize: 15,
            color: '#4b5563',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.5px',
            caretColor: '#9ca3af',
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
              color: '#9ca3af',
              borderRadius: '50%',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#4b5563')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}

        {/* Search icon */}
        <div style={{ display: 'flex', alignItems: 'center', color: '#9ca3af' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
    </div>
  );
}
