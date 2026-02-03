"use client";

import { useState } from "react";
import Image from "next/image";

const ALL_ID = "all";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const RESTAURANT = {
  name: "Thamel Toronto",
  instagram: "https://instagram.com/thameltoronto",
  tiktok: "https://tiktok.com/@thameltoronto",
};

type OptionChoice = { name: string; price: number };
type OptionGroup = { label: string; choices: OptionChoice[]; modifier?: boolean };
  
type MenuItemData =
  | { name: string; description?: string; price: number }
  | { name: string; description?: string; optionGroups: OptionGroup[] };

const MENU = {
  restaurant: RESTAURANT.name,
  sections: [
    {
      id: "starters",
      title: "Starters",
      items: [
        {
          name: "Momos",
          description: "House chutney on the side",
          optionGroups: [
            {
              label: "Cook options",
              choices: [
                { name: "Steamed", price: 12 },
                { name: "Jhol", price: 13 },
                { name: "Fried", price: 14 },
              ],
            },
            {
              label: "Protein options",
              modifier: true,
              choices: [
                { name: "Veg", price: 0 },
                { name: "Chicken", price: 2 },
                { name: "Buff", price: 3 },
              ],
            },
          ],
        },
        { name: "Chaat", description: "Crispy papdi, chickpeas, tamarind & mint", price: 10 },
        { name: "Pakora", description: "Mixed vegetable fritters with cilantro chutney", price: 9 },
        { name: "Soup of the day", description: "Ask your server", price: 8 },
      ],
    },
    {
      id: "mains",
      title: "Mains",
      items: [
        {
          name: "Chow Mein",
          description: "Stir-fried noodles with vegetables",
          optionGroups: [
            {
              label: "Cook options",
              choices: [
                { name: "Steamed", price: 14 },
                { name: "Fried", price: 16 },
              ],
            },
            {
              label: "Protein options",
              modifier: true,
              choices: [
                { name: "Veg", price: 0 },
                { name: "Chicken", price: 2 },
                { name: "Buff", price: 3 },
              ],
            },
          ],
        },
        { name: "Butter Chicken", description: "Tandoori chicken in tomato butter sauce, basmati rice", price: 22 },
        { name: "Lamb Curry", description: "Slow-cooked lamb, spices, rice & naan", price: 24 },
        { name: "Dal Bhat", description: "Lentils, rice, greens, pickle & papad", price: 18 },
        { name: "Chicken Thukpa", description: "Noodle soup with vegetables & herbs", price: 16 },
        { name: "Paneer Tikka Masala", description: "Grilled paneer in creamy tomato sauce, rice", price: 19 },
        { name: "Jhinga Masala", description: "Prawns in spiced tomato gravy, rice", price: 26 },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [
        { name: "Naan", description: "Plain, garlic, or butter", price: 4 },
        { name: "Rice", description: "Basmati or jeera", price: 5 },
        { name: "Raita", description: "Yogurt with cucumber & mint", price: 4 },
        { name: "Papad", description: "Crisp lentil wafers", price: 3 },
      ],
    },
    {
      id: "drinks",
      title: "Drinks",
      items: [
        { name: "Lassi", description: "Sweet or salted", price: 5 },
        { name: "Chai", description: "Masala chai", price: 4 },
        { name: "Mango Lassi", description: "House mango blend", price: 6 },
        { name: "Sparkling water", description: "", price: 4 },
        { name: "Soft drinks", description: "Coke, Sprite, etc.", price: 3 },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      items: [
        { name: "Gulab Jamun", description: "Warm milk dumplings in rose syrup", price: 8 },
        { name: "Kheer", description: "Rice pudding with cardamom & nuts", price: 8 },
        { name: "Mango Kulfi", description: "Traditional frozen dessert", price: 9 },
      ],
    },
  ],
};

function MenuItem({ item }: { item: MenuItemData }) {
  if ("optionGroups" in item) {
    return (
      <li className="border-b border-[var(--border)] py-4 last:border-0">
        <div className="min-w-0">
          <h3 className="font-semibold text-[var(--foreground)]">{item.name}</h3>
          {item.description ? (
            <p className="mt-0.5 text-sm text-[var(--muted)]">{item.description}</p>
          ) : null}
          <div className="mt-3 space-y-3">
            {item.optionGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                  {group.label}
                </p>
                <ul className="space-y-1">
                  {group.choices.map((choice) => (
                    <li
                      key={choice.name}
                      className="flex justify-between gap-3 text-sm text-[var(--muted)]"
                    >
                      <span>{choice.name}</span>
                      <span className="shrink-0 font-medium tabular-nums text-[var(--accent)]">
                        {group.modifier
                          ? choice.price === 0
                            ? "included"
                            : `+$${choice.price}`
                          : `$${choice.price}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </li>
    );
  }
  return (
    <li className="border-b border-[var(--border)] py-4 last:border-0">
      <div className="flex justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-[var(--foreground)]">{item.name}</h3>
          {item.description ? (
            <p className="mt-0.5 text-sm text-[var(--muted)]">{item.description}</p>
          ) : null}
        </div>
        <span className="shrink-0 font-medium tabular-nums text-[var(--accent)]">
          ${item.price}
        </span>
      </div>
    </li>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_ID);

  const sectionsToShow =
    selectedCategory === ALL_ID
      ? MENU.sections
      : MENU.sections.filter((s) => s.id === selectedCategory);

  return (
    <div className="min-h-dvh bg-[var(--background)]">
      <div className="mobile-only flex flex-col bg-[var(--background)]">
        <div className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
          <header className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt={MENU.restaurant}
                width={140}
                height={56}
                className="h-14 w-auto object-contain"
                priority
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-[var(--foreground)]">{MENU.restaurant}</p>
                <p className="text-sm text-[var(--muted)]">Menu</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <a
                href={RESTAURANT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={RESTAURANT.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </header>

          <nav
            className="px-4 pb-2"
            aria-label="Menu categories"
          >
            <div className="flex gap-2 overflow-x-auto scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedCategory(ALL_ID)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                  selectedCategory === ALL_ID
                    ? "bg-[var(--accent)] text-[var(--background)]"
                    : "bg-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--background)]"
                }`}
              >
                All
              </button>
              {MENU.sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setSelectedCategory(section.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                    selectedCategory === section.id
                      ? "bg-[var(--accent)] text-[var(--background)]"
                      : "bg-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--background)]"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </nav>
        </div>

        <main className="flex-1 px-5 pb-8 pt-2">
          {sectionsToShow.map((section) => (
            <section key={section.id} className="pt-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                {section.title}
              </h2>
              <ul className="list-none">
                {section.items.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </ul>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
