export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items in your list ✈️</em>
      </footer>
    );

  const totalItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed).length;
  const totalPackedItemsPercent = Math.round(
    (totalPackedItems / totalItems) * 100
  );

  return (
    <footer className="stats">
      <em>
        {totalPackedItemsPercent === 100
          ? "You have everything! Ready to go ✈️"
          : `🎒 You have ${totalItems} items on your list, and you already packed ${totalPackedItems} (${
              totalPackedItemsPercent || 0
            }%)`}
      </em>
    </footer>
  );
}
