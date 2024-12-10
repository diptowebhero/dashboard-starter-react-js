// Generate page numbers for pagination with ellipsis
export const generatePageNumbers = (totalPages, currentPage) => {
  const pageNumbers = [];
  const maxVisiblePages = 5;

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      // Show the first three pages + ellipses
      pageNumbers.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      // Show last three pages + ellipses
      pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      // Show surrounding pages with ellipses
      pageNumbers.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    }
  }

  return pageNumbers;
};

export function getImgUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}
