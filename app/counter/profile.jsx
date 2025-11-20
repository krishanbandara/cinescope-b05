// Child component
function Avatar() {
  return (
    <img
      className="avatar"
      src="/assets/woman.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

// Main component/Parent Component
export default function Profile() {
  return (
    <Avatar />
  );
}
