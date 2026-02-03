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
  name: "Thamel Bar & Karaoke",
  instagram: "https://instagram.com/thameltoronto",
  tiktok: "https://tiktok.com/@thameltoronto",
};

type OptionChoice = { name: string; price?: number };
type OptionGroup = { label: string; choices: OptionChoice[]; modifier?: boolean };

type MenuItemData =
  | { name: string; description?: string; price: number }
  | { name: string; description?: string; price?: number; optionGroups: OptionGroup[] };

const MENU = {
  restaurant: RESTAURANT.name,
  sections: [
    {
      id: "starters",
      title: "Starters",
      items: [
        { name: "Alu Chop", description: "Premium spiced potato patties, expertly coated in crisp chickpea flour batter for a perfect crunch.", price: 8 },
        { name: "French Fries", description: "Thin-cut, golden potato fries with a light, crisp bite and soft, fluffy centre.", price: 8 },
        { name: "Fried Sausage", description: "Juicy sausages lightly battered and fried to a golden crisp, bursting with savoury flavour.", price: 8 },
        { name: "Edamame", description: "Tender, steamed soybean pods lightly salted, offering a fresh, nutty bite.", price: 7 },
        {
          name: "Wai Wai Chatpatey",
          description: "A tangy, spicy snack made with crunchy Wai Wai noodles, puffed rice, and fresh veggies.",
          price: 10,
          optionGroups: [
            {
              label: "Spice Level",
              choices: [
                { name: "Mild (no spice)" },
                { name: "Medium" },
                { name: "Spicy" },
              ],
            },
          ],
        },
        {
          name: "Peanut Sadeko",
          description: "A savoury, nutty snack made with roasted peanuts, fresh herbs, and spices, served with a tangy, spicy chutney.",
          price: 10,
          optionGroups: [
            {
              label: "Spice Level",
              choices: [
                { name: "Mild (no spice)" },
                { name: "Medium" },
                { name: "Spicy" },
              ],
            },
          ],
        },
        {
          name: "Bhatmas Sadeko",
          description: "A savoury, spicy snack made with roasted soya beans, and a blend of aromatic spices, served with a tangy, spicy chutney.",
          price: 10,
          optionGroups: [
            {
              label: "Spice Level",
              choices: [
                { name: "Mild (no spice)" },
                { name: "Medium" },
                { name: "Spicy" },
              ],
            },
          ],
        },
        {
          name: "Mustang Alu",
          description: "Spicy, crunchy potato wedges from Nepal's Mustang region, fried and tossed with fiery Himalayan spices like Timur pepper, chillies, and fenugreek.",
          price: 10,
        },

      ],
    },
    {
      id: "apetizers",
      title: "Apetizers",
      items: [
        {
          name: "Sukuti",
          description: "A dried meat product of Nepalese origin, also consumed in the Himalayan regions of India and Tibet.",
          price: 15,
          optionGroups: [
            {
              label: "Protein options",
              choices: [
                { name: "Beef" },
                { name: "Buff" },
              ],
            },
          ],
        },
        {
          name: "Mutton Bhuttan",
          description: "A stir-fried dish prepared with goat tripe and other digestive parts.",
          price: 15,
          optionGroups: [
            {
              label: "Protein options",
              choices: [
                { name: "Beef" },
                { name: "Buff" },
              ],
            },
          ],
        },
        {
          name: "Chicken Wings",
          description: "Tender, crispy-fried wings coated in a rich, flavour-packed sauce.",
          price: 14,
          optionGroups: [
            {
              label: "Sauce",
              choices: [
                { name: "Hot Buffalo" },
                { name: "Honey Garlic" },
                { name: "Salt & Chilli" },
              ],
            },
          ],
        },
        { name: "Chicken Lollipop", description: "Crispy, deep-fried drumettes marinated in spicy Indo-Chinese flavours, served with a spicy-tangy dipping sauce.", price: 14 },
        {
          name: "Choyela",
          description: "A typical newari dish made with grilled meat, freshly cooked with spices and vegetables.",
          price: 15,
          optionGroups: [
            {
              label: "Protein options",
              choices: [
                { name: "Chicken" },
                { name: "Beef" },
                { name: "Buff" },
              ],
            },
          ],
        },
        {
          name: "Chilli",
          description: "Spicy, tangy, and flavourful chilli sauce made with fresh chillies, tomatoes, and a blend of spices with choice of protein.",
          price: 13,
          optionGroups: [
            {
              label: "Protein options",
              choices: [
                { name: "Chicken" },
                { name: "Buff" },
                { name: "Beef" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "mains",
      title: "Mains",
      items: [
        {
          name: "Momo (Dumplings)",
          description: "Choice of protein, steamed, jhol, or fried, with house chutney on the side.",
          optionGroups: [
            {
              label: "Protein options",
              choices: [
                { name: "Beef" },
                { name: "Chicken" },
                { name: "Buff" },
              ],
            },
            {
              label: "Cook options",
              choices: [
                { name: "Steamed", price: 14 },
                { name: "Jhol", price: 15 },
                { name: "Fried", price: 15 },
                { name: "Chilli", price: 15 },
              ],
            },

          ],
        },
        {
          name: "Chow Mein",
          description: "Stir-fried noodles with vegetables and your choice of protein.",
          price: 14,
          optionGroups: [
            {
              label: "Protein options",
              modifier: true,
              choices: [
                { name: "Veg"},
                { name: "Chicken" },
                { name: "Beef" },
                { name: "Buff" },
              ],
            },
          ],
        },
        {
          name: "Fried Rice",
          description: "Stir-fried rice with vegetables and your choice of protein made in Thai style.",
          price: 14,
          optionGroups: [
            {
              label: "Protein options",
              modifier: true,
              choices: [
                { name: "Veg"},
                { name: "Chicken" },
                { name: "Beef" },
                { name: "Buff" },
              ],
            },
          ],
        },
        {
          name: "Pork Sekuwa",
          description: "A traditional Nepalese dish made with pork marinated in spices and grilled to perfection.",
          price: 16,
        },
        {
          name: "Newari Khaja Set",
          description: "A traditional Newari dish made with a mix of achars (pickles), puffed rice, and your choice of protein.",
          price: 17,
          optionGroups: [
            {
              label: "Protein options",
              modifier: true,
              choices: [
                { name: "Chicken" },
                { name: "Beef" },
                { name: "Buff" },
                { name: "Mutton" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function MenuItem({ item }: { item: MenuItemData }) {
  if ("optionGroups" in item) {
    const hasItemPrice = "price" in item && item.price !== undefined;
    return (
      <li className="border-b border-[var(--border)] py-4 last:border-0">
        <div className="min-w-0">
          <div className="flex justify-between gap-3">
            <h3 className="font-semibold text-[var(--foreground)]">{item.name}</h3>
            {hasItemPrice ? (
              <span className="shrink-0 font-medium tabular-nums text-[var(--accent)]">
                ${item.price}
              </span>
            ) : null}
          </div>
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
                      {choice.price !== undefined ? (
                        <span className="shrink-0 font-medium tabular-nums text-[var(--accent)]">
                          {group.modifier
                            ? choice.price === 0
                              ? "included"
                              : `+$${choice.price}`
                            : `$${choice.price}`}
                        </span>
                      ) : null}
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
                <p className="text-sm text-[var(--muted)]">Food Menu</p>
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
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${selectedCategory === ALL_ID
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
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${selectedCategory === section.id
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
