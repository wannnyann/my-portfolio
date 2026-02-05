import Image from "next/image";
import Link from "next/link";
import { Achievement, Skill } from "@/lib/types";

async function getProfile() {
  const res = await fetch("http://localhost:8000/profile", {
    cache: "no-store",
  });
  return res.json();
}

async function getAchievements() {
  const res = await fetch("http://localhost:8000/achievements", {
    cache: "no-store",
  });
  return res.json();
}
async function getSkills() {
  const res = await fetch("http://localhost:8000/skills", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const profile = await getProfile();
  const achievements = await getAchievements();
  const skills = await getSkills();

  return (
    <main className="flex min-h-screen w-full flex-col items-center  py-1 px-16 dark:bg-black ">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-semibold text-black dark:text-zinc-50 leading-loose">
          my portfolio
        </h1>

        <div className="flex items-start gap-6">
          <Image
            src="/ヴィクトリアの滝.jpg"
            alt="夏に撮った写真"
            width={130} // 表示したい幅
            height={170} // 表示したい高さ
            className="rounded-xl"
          />
          <div className="space-y-4">
            <h3 className="text-4xl font-semibold text-green-700 dark:text-zinc-50 leading-loose">
              プロフィール({profile.name})
            </h3>
            <p className="text-2xl leading-loose whitespace-pre-wrap">
              {profile.bio}
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-12 mt-10">
          {/* 実績 */}
          <div className="space-y-3 text-left">
            <h4 className="text-4xl font-semibold text-blue-600 dark:text-zinc-50">
              実績
            </h4>
            <ul className="text-2xl leading-loose">
              {(Array.isArray(achievements) ? achievements : achievements?.data ?? []).map((a: Achievement) => (
                <li key={a.id}>{a.title}</li>
              ))}
            </ul>
          </div>

          {/* スキル */}
          <div className="space-y-3 text-left">
            <h4 className="text-4xl font-semibold text-orange-600 dark:text-zinc-50">
              スキル
            </h4>
            <ul className="text-2xl leading-loose">
              {skills.map((s: Skill) => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-[26px]">
        <Link
          href="/contact"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          お問い合わせ
        </Link>
        <Link
          href="/login"
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
        >
          ログイン
        </Link>
      </div>
    </main>
  );
}
