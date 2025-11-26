export function requireLogin() {
  const token = localStorage.getItem("token");
  return !!token;
}
