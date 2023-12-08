"use client";

export default function page() {
  const handleClickDemo = () => {
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        name: "ikhsan ganteng",
        pass: 123,
      }),
    });
  };

  return (
    <>
      <div onClick={handleClickDemo} className="mt-40 cursor-pointer">
        Login Bray
      </div>
    </>
  );
}
