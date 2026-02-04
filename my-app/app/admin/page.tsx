"use client";

import { useEffect, useState } from "react";
import { auth } from "../../src/firebase.client";
import type { User } from "firebase/auth";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsub();
  }, []);

  if (!user) return <p>ログイン中...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>管理者ページ</h1>
      <p>ログイン中ユーザー: {user.email}</p>
    </div>
  );
}
