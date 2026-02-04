// app/contact/page.tsx
"use client";
import { useState } from "react";

export default function ContactPage() {
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("送信内容:", { content, email });
    alert("送信しました！（まだダミー処理です）");
  };

  return (
    <div>
      <h1 className="text-5xl">お問い合わせ</h1>
      <p className="text-2xl">ここにお問い合わせ内容をご記入下さい。</p>

      <form onSubmit={handleSubmit}>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">内容</th>
                <th className="border px-4 py-2">メアド</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-6">
                  <textarea
                    className="w-full border p-2"
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="お問い合わせ内容を入力"
                  />
                </td>
                <td className="border px-4 py-6">
                  <input
                    type="email"
                    className="w-full border p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="メールアドレス"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            送信
          </button>
        </div>
      </form>
    </div>
  );
}
