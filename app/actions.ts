"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export async function deleteHabit(habit: string) {
  await kv.hdel("habits", habit);

  revalidatePath("/");
}

type ToogleHabitParams = {
  habit: string;
  habitStreak: Record<string, boolean> | null;
  date: string | null;
  done?: boolean;
};

export async function toggleHabit({
  habit,
  habitStreak,
  date,
  done,
}: ToogleHabitParams) {
  if (!habitStreak || !date) {
    return;
  }

  const updateHabitStreak = {
    [habit]: {
      ...habitStreak,
      [date]: done === undefined ? true : !done,
    },
  };
  await kv.hset("habits", updateHabitStreak);
  revalidatePath("/");
}
