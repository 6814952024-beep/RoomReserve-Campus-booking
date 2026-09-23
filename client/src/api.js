const API_URL = import.meta.env.VITE_API_URL || "/api";

export async function request(path, options = {}, token) {
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "เกิดข้อผิดพลาด");
  return data;
}

export async function uploadFile(file, token) {
  const headers = {
    "Content-Type": file.type || "application/octet-stream",
    "X-File-Name": file.name,
    Authorization: `Bearer ${token}`,
  };
  const response = await fetch(`${API_URL}/uploads`, {
    method: "POST",
    headers,
    body: file,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Upload failed");
  return data;
}