"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageSquareText, Send, Sparkles, X } from "lucide-react";

import { BrandGlyph } from "@/components/brand-mark";
import { cx } from "@/components/ui/primitives";
import type { AssistantAction } from "@/lib/assistant";
import { openingMessage, quickPrompts } from "@/lib/assistant";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
  actions?: AssistantAction[];
  followUps?: string[];
};

let counter = 0;
const nextId = () => `m${++counter}`;

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "m0", role: "assistant", text: openingMessage, followUps: quickPrompts.slice(0, 3) },
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, pending, open]);

  useEffect(() => {
    if (open) {
      const timer = window.setTimeout(() => inputRef.current?.focus(), 220);
      return () => window.clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || pending) return;

      setMessages((current) => [...current, { id: nextId(), role: "user", text }]);
      setInput("");
      setPending(true);

      try {
        const response = await fetch("/api/assistant", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text }),
        });
        const data = (await response.json()) as {
          reply?: string;
          actions?: AssistantAction[];
          followUps?: string[];
        };

        setMessages((current) => [
          ...current,
          {
            id: nextId(),
            role: "assistant",
            text:
              data.reply ??
              "Something went wrong on my side. Email mojakprimeai@gmail.com and a person will pick it up.",
            actions: data.actions,
            followUps: data.followUps,
          },
        ]);
      } catch {
        setMessages((current) => [
          ...current,
          {
            id: nextId(),
            role: "assistant",
            text:
              "I could not reach the server just now. Check your connection, or email mojakprimeai@gmail.com and a person will reply.",
          },
        ]);
      } finally {
        setPending(false);
      }
    },
    [pending],
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close the assistant" : "Ask Prime, the Mojak assistant"}
        className={cx(
          "fixed right-4 z-70 inline-flex items-center gap-2.5 rounded-2xl border border-azure-2/30 bg-ink px-4 text-paper shadow-lift-lg transition-all duration-300 md:right-6",
          "h-14 hover:border-azure-2/60",
          // clears the mobile action bar
          "bottom-[5.5rem] md:bottom-6",
          open && "pointer-events-none scale-90 opacity-0",
        )}
      >
        <span className="relative inline-flex">
          <Sparkles className="h-5 w-5 text-azure-2" strokeWidth={1.75} aria-hidden />
          <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulse-dot rounded-full bg-mint" aria-hidden />
        </span>
        <span className="font-display text-[0.9375rem] font-semibold">Ask Prime</span>
      </button>

      <div
        role="dialog"
        aria-modal="false"
        aria-label="Prime, the Mojak Prime AI assistant"
        className={cx(
          "fixed z-70 flex flex-col overflow-hidden rounded-3xl border border-azure-3/15 bg-ink shadow-lift-lg transition-all duration-300",
          "inset-x-3 bottom-3 top-20 md:inset-auto md:bottom-6 md:right-6 md:top-auto md:h-[34rem] md:w-[24rem]",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-4 scale-95 opacity-0",
        )}
      >
        <div className="flex items-center gap-3 border-b border-azure-3/12 bg-ink-2 px-4 py-3.5">
          <BrandGlyph tone="light" className="h-9 w-9" />
          <div className="min-w-0 flex-1">
            <p className="font-display text-[0.9375rem] font-semibold text-white">Prime</p>
            <p className="flex items-center gap-1.5 text-[0.75rem] text-mint-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint" aria-hidden />
              Answers from Mojak&rsquo;s own information
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close the assistant"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-azure-3/15 text-azure-3/70 transition-colors hover:border-azure-3/40 hover:text-white"
          >
            <X className="h-4 w-4" strokeWidth={2} aria-hidden />
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4" aria-live="polite">
          {messages.map((message) => (
            <div key={message.id}>
              <div
                className={cx(
                  "max-w-[92%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[0.9375rem] leading-relaxed",
                  message.role === "user"
                    ? "ml-auto bg-azure text-white"
                    : "border border-azure-3/12 bg-white/5 text-azure-3/90",
                )}
              >
                {message.text}
              </div>

              {message.actions && message.actions.length > 0 ? (
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {message.actions.map((action) => (
                    <ActionChip key={`${message.id}-${action.href}`} action={action} onNavigate={() => setOpen(false)} />
                  ))}
                </div>
              ) : null}

              {message.followUps && message.followUps.length > 0 ? (
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {message.followUps.map((prompt) => (
                    <button
                      key={`${message.id}-${prompt}`}
                      type="button"
                      onClick={() => send(prompt)}
                      className="rounded-full border border-azure-3/18 px-3 py-1.5 text-left text-[0.8125rem] text-azure-3/75 transition-colors hover:border-azure-2/50 hover:text-white"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          {pending ? (
            <div className="inline-flex items-center gap-1.5 rounded-2xl border border-azure-3/12 bg-white/5 px-3.5 py-3">
              <Dot delay="0ms" />
              <Dot delay="140ms" />
              <Dot delay="280ms" />
              <span className="sr-only">Prime is typing</span>
            </div>
          ) : null}
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            void send(input);
          }}
          className="border-t border-azure-3/12 bg-ink-2 p-3"
        >
          <div className="flex items-center gap-2">
            <label htmlFor="assistant-input" className="sr-only">
              Ask Prime a question
            </label>
            <input
              id="assistant-input"
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about pricing, POS, chatbots…"
              autoComplete="off"
              className="h-11 flex-1 rounded-xl border border-azure-3/15 bg-ink px-3.5 text-[0.9375rem] text-white placeholder:text-azure-3/40 focus:border-azure-2/60 focus:outline-none"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              aria-label="Send"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-azure text-white transition-opacity disabled:opacity-40"
            >
              <Send className="h-4 w-4" strokeWidth={2} aria-hidden />
            </button>
          </div>
          <p className="mt-2 px-1 text-[0.6875rem] leading-relaxed text-azure-3/40">
            Prime answers from Mojak&rsquo;s published information and hands you to a person when it cannot help.
          </p>
        </form>
      </div>
    </>
  );
}

function ActionChip({ action, onNavigate }: { action: AssistantAction; onNavigate: () => void }) {
  const className =
    "inline-flex items-center gap-1.5 rounded-full bg-azure/15 px-3 py-1.5 text-[0.8125rem] font-medium text-azure-2 transition-colors hover:bg-azure/25 hover:text-white";

  if (action.kind === "internal") {
    return (
      <Link href={action.href} onClick={onNavigate} className={className}>
        {action.label}
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
      </Link>
    );
  }

  return (
    <a
      href={action.href}
      target={action.kind === "external" ? "_blank" : undefined}
      rel={action.kind === "external" ? "noopener noreferrer" : undefined}
      className={className}
    >
      {action.label}
      {action.kind === "external" ? (
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
      ) : (
        <MessageSquareText className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
      )}
    </a>
  );
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-azure-2/70"
      style={{ animationDelay: delay, animationDuration: "1s" }}
      aria-hidden
    />
  );
}
