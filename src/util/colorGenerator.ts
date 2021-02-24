const colors = [
  "#FFD628",
  "#C8C0BE",
  "#884F31",
  "#3DFFA4",
  "#F5A7CB",
  "#E0E843",
  "#FFA53D",
  "#F5C9A6",
  "#E0E843",
  "#DCE7F7",
  "#B1D457",
  "#7565F5",
  "#59DBFA",
];

export default function colorGenerator() {
  return colors[Math.floor(Math.random() * colors.length)];
}
