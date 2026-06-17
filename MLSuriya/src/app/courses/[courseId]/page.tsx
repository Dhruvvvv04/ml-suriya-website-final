"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { courses } from "@/lib/data/courses";
import Button from "@/components/ui/Button";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const course = courses.find((c) => c.id === courseId);
  const [notice, setNotice] = useState("");

  const handleEnroll = () => {
    if (courseId === "kevalya") {
      window.location.href = "tel:+919427611171";
      return;
    }
    setNotice(`Enrollment request received for ${course?.title}. We will notify you soon.`);
    setTimeout(() => setNotice(""), 3800);
  };

  if (!course) {
    return (
      <div className="relative">
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="aura-orb aura-orb-1" />
          <div className="aura-orb aura-orb-2" />
        </div>
        <div className="relative z-10">
          <Header />
          <main className="flex min-h-screen items-center justify-center px-6 pt-20">
            <div className="glass w-full max-w-lg rounded-2xl p-8 text-center">
              <h1 className="font-display text-2xl font-bold text-[var(--color-ink)]">
                Course Not Found
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                The course you requested does not exist.
              </p>
              <Link
                href="/courses"
                className="mt-4 inline-block font-semibold text-[var(--color-p-600)] no-underline"
              >
                ← Back to Courses
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aura-orb aura-orb-1" />
        <div className="aura-orb aura-orb-2" />
        <div className="aura-orb aura-orb-3" />
      </div>
      <div className="relative z-10">
        <Header />
        <main className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-[920px]">
            <Link
              href="/courses"
              className="mb-5 inline-block font-semibold text-[var(--color-p-600)] no-underline"
            >
              ← Back to Courses
            </Link>

            <div className="glass rounded-2xl border border-white/80 bg-white/86 p-6 backdrop-blur-[12px] md:p-8">
              <span className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[var(--color-p-600)]">
                Course Details
              </span>
              <h1 className="font-display text-[clamp(2rem,_4vw,_3rem)] font-bold leading-tight text-[var(--color-ink)]">
                {course.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-2)]">
                {course.subtitle}
              </p>

              {course.highlightTitle && (
                <div
                  className="mt-4 rounded-xl border border-[#f0cf68] p-4"
                  style={{
                    background: "linear-gradient(120deg,#fff4cb,#ffe8a5)",
                    boxShadow: "0 10px 22px rgba(240,192,64,0.2)",
                  }}
                >
                  <p className="text-sm font-bold text-[var(--color-p-800)]">
                    {course.highlightTitle}
                  </p>
                  {course.highlightSubtext && (
                    <p className="mt-1 text-xs text-[var(--color-p-700)]">
                      {course.highlightSubtext}
                    </p>
                  )}
                </div>
              )}

              <div className="mt-6 grid gap-4 sm:grid-cols-4">
                {[
                  { label: "Duration", value: course.duration },
                  { label: "Fees", value: course.fees },
                  { label: "Level", value: course.level },
                  { label: "Focus", value: course.focus },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[rgba(107,53,200,0.12)] bg-[rgba(255,255,255,0.6)] p-3"
                  >
                    <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-[var(--color-muted)]">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[var(--color-ink-2)]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">
                  What You Will Learn
                </h2>
                <ul className="mt-3 space-y-2">
                  {course.whatYouLearn.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-muted)]"
                    >
                      <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-p-500)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {course.dayTopics && (
                <div className="mt-8">
                  <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">
                    Day-by-Day Schedule
                  </h2>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {course.dayTopics.map((d) => (
                      <div
                        key={d.day}
                        className="rounded-xl border border-[rgba(107,53,200,0.1)] bg-[rgba(255,255,255,0.5)] px-4 py-3"
                      >
                        <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-[var(--color-p-500)]">
                          {d.day}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium text-[var(--color-ink-2)]">
                          {d.topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button onClick={handleEnroll}>
                  {courseId === "kevalya" ? "Call to Enroll" : "Enroll Now"}
                </Button>

                {notice && (
                  <span className="text-sm font-medium text-[var(--color-p-600)]">
                    {notice}
                  </span>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
