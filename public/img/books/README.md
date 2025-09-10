# Books Page Setup

This directory contains book cover images for the `/books` page.

## Adding New Books

1. Add book cover images to this directory (`static/img/books/`)
2. Update `data/books.yaml` with the new book information
3. Use the format: `/img/books/your-book-cover.jpg`

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Dimensions**: Recommended 200x300px (2:3 aspect ratio)
- **File size**: Keep under 200KB for optimal loading

## Placeholder Images

If you don't have actual book cover images, you can:

1. Use the `placeholder-generator.html` file to create simple placeholders
2. Search for book covers on:
   - Google Images (search "book title cover")
   - Amazon book pages
   - Goodreads
   - Publisher websites

## Book Data Structure

Each book in `data/books.yaml` should have:

```yaml
- title: "Book Title"
  author: "Author Name"
  cover: "/img/books/book-cover.jpg"
  description: "Brief description (optional)"
```

## Styling

The books page uses a responsive grid layout with hover effects that show:
- Book title
- Author name
- Description (if provided)

The layout automatically adapts to different screen sizes.
