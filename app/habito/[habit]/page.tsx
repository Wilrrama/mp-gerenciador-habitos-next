import ArrowIcon from "@/components/ArrowIcon";
import { kv } from "@vercel/kv";
import Link from "next/link";

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  const firstDayWeekDay = date.getDay();
  const numberOfEmptyDays = Array(firstDayWeekDay).fill(null);
  const days = [...numberOfEmptyDays];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

async function Habit({ params: { habit } }: { params: { habit: string } }) {
  const decodeHabit = decodeURI(habit);
  const habitStreak = await kv.hget("habits", decodeHabit);

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

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

      <section className="w-full my-2 rounded-md bg-neutral-800">
        <div className="flex justify-between mx-2 my-4 font-sans text-neutral-400">
          <button>
            <ArrowIcon width={12} height={12} className="stroke-neutral-400" />
          </button>
          <span>Outubro 2024</span>
          <button>
            <ArrowIcon
              width={12}
              height={12}
              className="stroke-neutral-400 rotate-180"
            />
          </button>
        </div>
        <div className="grid w-full grid-cols-7 mt-2">
          {weekDays.map((day) => (
            <div key={day} className="flex flex-col items-center p-2">
              <span className="font-sans text-xs font-light text-neutral-200">
                {day}
              </span>
            </div>
          ))}
          {daysInMonth.map((day, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <span className="font-sans text-xs font-light text-neutral-400">
                {day?.getDate()}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Habit;
