import ArrowIcon from "@/components/ArrowIcon";
import Calendar from "@/components/Calendar";
import { kv } from "@vercel/kv";
import Link from "next/link";

async function Habit({ params: { habit } }: { params: { habit: string } }) {
  const decodeHabit = decodeURI(habit);
  const habitStreak = await kv.hget("habits", decodeHabit);

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-2xl font-light text-center font-display text-white">
        {decodeHabit}
      </h1>
      <Link
        className="flex items-center font-sans text-xs text-neutral-300 gap-2"
        href={"/"}
      >
        <ArrowIcon width={12} height={12} />
        voltar
      </Link>
      <Calendar />
    </main>
  );
}

export default Habit;
