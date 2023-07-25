export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Starting adding items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything, ready to fly ✈"
          : `👜 You have ${numItems} ${
              numItems > 1 ? "items" : "item"
            } on your list,
          and you already pack ${numPacked} ${numPacked > 1 ? "items" : "item"}(
          ${percentage}%)`}
      </em>
    </footer>
  );
}
